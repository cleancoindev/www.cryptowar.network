<template>
  <div class="round-container">
    <div class="row">
      <div class="col-lg-2 round-number">{{ round }}</div>
      <div class="col-lg-10">
        <div class="row">

          <table>
            <tr>
              <td colspan="2"><input
              class="input-field amount-input"
              placeholder="Amount BNB"
              type="number"
              v-model="amount" style="width:170px;"
            /> BNB</td>
            </tr>
            <tr>
              <td> <button v-if="yourDeposit==0" class="action-button" @click="this.handleDeposit(round)">
              <span class="text">Deposit</span>
            </button></td>
              <td><button
              class="action-button"
              v-bind:disabled="!canClaim"
              @click="this.handleWithdraw(round)" >
              <span class="text">Claim</span>
            </button></td>
              </tr>
            </table></div>
        <div style="margin:15px 0;">
          <VueCountdown
            :time="claimAt"
            v-if="!canClaim"
            v-slot="{ days, hours, minutes, seconds }" > ⏰ Claim will be available in {{ days }} days, {{ hours }} hours,
            {{ minutes }} minutes, {{ seconds }} seconds.
          </VueCountdown>
        </div>
        <div class="progress" style="margin-bottom:15px">
          <div
            class="progress-bar progress-bar-bg"
            role="progressbar"
            v-bind:style="{ width: (totalDeposit * 100) / maxDeposit + '%' }"
            :aria-valuenow="(totalDeposit * 100) / maxDeposit"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{ ((totalDeposit * 100) / maxDeposit).toFixed(0) }}%
          </div>
        </div>

        <table style="width:100%">
          <tr><td colspan="2"> <h3>Round Information</h3>
            </td>
            </tr>
          <tr>
            <td style="text-align:left; width:115px;" >Total Deposit:</td>
            <td style="text-align:left">{{ totalDeposit }} BNB</td>
          </tr>
          <tr>
            <td style="">Min Deposit:</td>
            <td style="text-align:left">{{ maxDeposit }} BNB </td>
           </tr>
          <tr>
            <td style="">Max Deposit:</td>
            <td style="text-align:left">{{ maxDeposit }} BNB </td>
           </tr>
          <tr>
            <td style="">xBlade Price:</td>
            <td style="text-align:left">{{ maxDeposit }} BNB</td>
           </tr>
          <tr>
            <td style="">Total xBlade:</td>
            <td style="text-align:left">214 861 xBlade</td>
           </tr>
          <tr>
            <td style="">Your Deposit:</td>
            <td style="text-align:left">{{ yourDeposit }} BNB</td>
           </tr>
        </table>

        <!-- <div>Max Volume: {{ maxVolume }} BNB</div> -->
        <button class="orders-button" v-if="orders.length>0" @click="isOpen = !isOpen">
          <h3> &raquo;
          First 50 deposits </h3>
          </button>

        <div v-show="isOpen">
          <table>
            <tr v-for="order in orders" :key="order.id">

              <td> <a :href="'https://bscscan.com/address/' + order.account" target="_blank"> {{ order.account }} </a> </td>
              <td style="padding-left:15px;"> {{ order.depositValue }} BNB </td>
              </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import VueCountdown from "@chenfengyuan/vue-countdown";

interface Data {
  isOpen: boolean;
  amount: number;
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
  ],
  data() {
    return {
      isOpen: false,
      amount: 0.1,
    } as Data;
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
  font-size: 68px;
  font-weight: 900;
}
.amount-input {
  border-radius: 8px;
  padding: 0 12px;
  margin:8px 16px;
}
.orders-button {
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  margin: 16px 0;
}

.progress-bar-bg {
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
}
</style>