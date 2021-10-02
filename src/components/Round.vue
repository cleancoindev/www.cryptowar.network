<template>
  <div class="round-container">
    <div class="row">
      <div class="col-lg-2 round-number">{{ round }}</div>
      <div class="col-lg-10">
        <div class="row">
          <input
            class="input-field amount-input"
            placeholder="Amount BNB"
            type="number"
            v-model="amount"
          />
          <button class="action-button" @click="this.handleDeposit(round)">
            <span class="text">Deposit</span>
          </button>
          <button
            class="action-button"
            v-bind:disabled="!canClaim"
            @click="this.handleWithdraw(round)"
          >
            <span class="text">Claim</span>
          </button>
        </div>

        <div>Total Deposit: {{ totalDeposit }} BNB</div>
        <div>Max Deposit: {{ maxDeposit }} BNB</div>
        <div>Max Volume: {{ maxVolume }} BNB</div>
        <button class="orders-button" @click="isOpen = !isOpen">Orders</button>

        <div v-show="isOpen">
          <div v-for="order in orders" :key="order.id">
            <div>Address: {{ order.account }}</div>
            <div>{{ order.depositValue }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";

export default {
  props: ["round", "canClaim", "totalDeposit", "maxVolume", "orders", "maxDeposit"],
  data() {
    return {
      isOpen: false,
      amount: 0,
    };
  },
  methods: {
    ...mapActions(["depositBnbToRound", "withdrawRound"]),
    handleDeposit(round: number) {
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
  },
};
</script>

<style scoped>
.round-container {
  background-image: url(/src/assets/images/help-aside.jpg);
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
  margin: 0 16px;
}

.action-button:active,
.action-button:hover {
  outline: 0;
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
  font-size: 68px;
  font-weight: 900;
}
.amount-input {
  border-radius: 8px;
  padding: 0 12px;
}
.orders-button {
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  margin: 16px 0;
}
</style>