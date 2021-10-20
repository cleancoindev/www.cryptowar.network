<template>
  <div class="round-container">
    <div class="head-box">
      <div class="row">
        <div class="col-lg-11 input-box">
          <div class="col-lg-7 col-md-8">
            <div class="input-group" v-if="yourDeposit == 0 && !isFinished">
              <input
                class="form-control"
                placeholder="Amount BNB"
                type="number"
                v-model="amount"
                style="width: 170px"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-primary"
                  type="button"
                  @click="handleDepositMax()"
                >
                  Max
                </button>
              </div>
            </div>
            <small class="form-text error-text" v-if="!!error">
              {{ error }}
            </small>
          </div>
          <div class="col-lg-5 col-md-4">
            <a
              v-if="yourDeposit == 0 && !isFinished"
              class="mybtn1"
              @click="this.handleDeposit(round)"
            >
              <span class="text">Deposit</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div style="margin: 15px 0">
      <VueCountdown
        :time="claimAt"
        v-if="claimAt > 0"
        v-slot="{ days, hours, minutes, seconds }"
      >
        ⏰ Claim will be available in {{ days }} days, {{ hours }} hours,
        {{ minutes }} minutes, {{ seconds }} seconds.
      </VueCountdown>
    </div>
    <div class="progress" style="margin-bottom: 15px">
      <div
        class="progress-bar progress-bar-bg"
        role="progressbar"
        v-bind:style="{ width: (totalDeposit * 100) / maxVolume + '%' }"
        :aria-valuenow="(totalDeposit * 100) / maxVolume"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ ((totalDeposit * 100) / maxVolume).toFixed(0) }}%
      </div>
    </div>

    <div class="round-info">
      <div class="title-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-info-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          />
        </svg>
        Round Information
      </div>
      <div class="info-box row" v-if="!isFinished">
        <div class="col-lg-4">
          <div class="info-item">
            <div class="item-title">Your Deposit</div>
            <div class="item-value">{{ yourDeposit }} BNB</div>
          </div>
          <div class="info-item">
            <div class="item-title">Total Deposit</div>
            <div class="item-value">{{ totalDeposit }} BNB</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info-item">
            <div class="item-title">Min Deposit</div>
            <div class="item-value">{{ minDeposit }} BNB</div>
          </div>
          <div class="info-item">
            <div class="item-title">Max Deposit</div>
            <div class="item-value">{{ maxDeposit }} BNB</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info-item">
            <div class="item-title">xBlade Price</div>
            <div class="item-value">{{ price }} BNB</div>
            <div class="item-value-usd">~ ${{ (price * bnbPrice).toFixed(6) }}</div>
          </div>
          <div class="info-item">
            <div class="item-title">Total xBlade</div>
            <div class="item-value">{{ amountTokenSale }} xBlade</div>
          </div>
        </div>
      </div>

      <div class="info-box row" v-if="isFinished">
        <div class="col-lg-4">
          <div class="info-item">
            <div class="item-title">Your Deposit</div>
            <div class="item-value">{{ yourDeposit }} BNB</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info-item">
            <div class="item-title">Total Deposit</div>
            <div class="item-value">{{ totalDeposit }} BNB</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info-item">
            <div class="item-title">Total xBlade</div>
            <div class="item-value">{{ amountTokenSale }} xBlade</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <a
        v-if="canClaim"
        class="action-button"
        v-bind:disabled="!canClaim"
        @click="this.handleWithdraw(round)"
      >
        <span class="text claim-text">
          <div>Claim</div>
        </span>
      </a>
    </div>

    <button
      class="orders-button"
      v-if="orders.length > 0 && !isFinished"
      @click="isOpen = !isOpen"
    >
      <span>&raquo; First 50 deposits</span>
    </button>

    <div v-show="isOpen">
      <div class="row holder-item" v-for="order in orders" :key="order.id">
        <div class="col-md-9 wallet-address">
          <a
            :href="'https://bscscan.com/address/' + order.account"
            target="_blank"
          >
            {{ order.account }}
          </a>
        </div>
        <div class="col-md-3 wallet-value">{{ order.depositValue }} BNB</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from "vuex";
import VueCountdown from "@chenfengyuan/vue-countdown";

interface Data {
  isOpen: boolean;
  amount: number;
  error: string;
}

export default {
  components: { VueCountdown },
  props: [
    "round",
    "canClaim",
    "totalDeposit",
    "maxVolume",
    "orders",
    "maxDeposit",
    "claimAt",
    "yourDeposit",
    "amountTokenSale",
    "price",
    "minDeposit",
    "isFinished",
  ],
  computed: {
    ...mapState(["web3", "defaultAccount", "bnbPrice"]),
  },
  data() {
    return {
      isOpen: false,
      amount: 0.1,
      error: "",
    } as Data;
  },
  methods: {
    ...mapActions(["depositBnbToRound", "withdrawRound"]),
    handleDeposit(round: number) {
      this.error = "";
      if (this.amount > this.maxDeposit) {
        this.error = `You can only deposit max ${this.maxDeposit} BNB`;
        return;
      }

      if (this.amount < this.minDeposit) {
        this.error = `You must deposit minimum ${this.minDeposit} BNB`;
        return;
      }
      // @ts-ignore
      this.$store.dispatch({
        type: "depositBnbToRound",
        round,
        amount: this.amount,
      });
    },
    handleWithdraw(round: number) {
      // @ts-ignore
      this.$store.dispatch({
        type: "withdrawRound",
        round,
      });
    },
    async handleDepositMax() {
      const balance = Number(
        this.web3.utils.fromWei(
          await this.web3.eth.getBalance(this.defaultAccount)
        )
      );
      if (balance > this.maxDeposit) {
        this.amount = this.maxDeposit;
      } else {
        this.amount = balance;
      }
    },
  },
};
</script>

<style scoped>
.round-container {
  background-image: url(/src/assets/images/help-aside.webp);
  background-position: center;
  background-size: cover;
  padding: 20px 30px 30px;
  border-radius: 20px;
  margin: 32px 0;
}

.action-button {
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 100px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin: 8px 16px;
}

.action-button:active,
.action-button:hover {
  outline: 0;
}
.action-button:disabled span {
  background-color: rgb(139, 139, 139);
}

.action-button span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.action-button:hover span {
  background: none;
}

@media (min-width: 768px) {
  .action-button {
    font-size: 20px;
    min-width: 120px;
  }
}

.round-number {
  font-size: 60px;
  color: #fff;
  line-height: 1;
}
.amount-input {
  border-radius: 8px;
  padding: 0 12px;
  margin: 8px 16px;
}
.orders-button {
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  margin: 16px 0;
}

.progress-bar-bg {
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border-radius: 0.5rem;
}
.input-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.input-group {
  background: #fff;
  border-radius: 5px;
  padding: 2px;
}
.input-group input {
  border: none;
}
.input-group .input-group-append button {
  border-radius: 4px;
  background-color: #23d3ee;
  border-color: #23d3ee;
}
.info-item {
  border: 1px solid #555555;
  padding: 5px 10px;
  margin: 10px 0;
  min-height: 80px;
}
.info-item .item-title {
  color: #fff;
  font-size: 0.8rem;
}
.info-item .item-value {
  color: #23d3ee;
  font-size: 1.3rem;
}

.info-item .item-value-usd {
  color: #23d3ee;
  font-size: 0.8rem;
  font-style: italic;
}

.title-info {
  color: #fff;
  display: flex;
  align-items: center;
}
.title-info svg {
  color: #ea9040;
  font-size: 0.8rem;
  margin-right: 0.5rem;
}
.error-text {
  color: red;
}
.btn-primary {
  background-color: #5b42f3 !important;
  border-color: #5b42f3 !important;
}
.claim-text {
  display: flex;
  justify-content: center;
}
</style>