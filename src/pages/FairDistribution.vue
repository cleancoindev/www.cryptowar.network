<template>
  <!-- Breadcrumb Area Start -->
  <section class="breadcrumb-area help">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>xBlade Token <br> Fair Distribution</h2>
        </div>
      </div>
      <!-- <div id="app">
        <h1>Welcome!</h1>
        <br />
        <vs-button
          size="large"
          color="primary"
          type="filled"
          v-on:click="connect"
          >Connect Wallet</vs-button
        >
        <br /><br />
        <vs-button
          size="large"
          color="primary"
          type="filled"
          v-on:click="disconnect"
          >Disconnect</vs-button
        >
        <br />
        {{ accounts }}
      </div> -->
    </div>
  </section>
  <!-- Breadcrumb Area End -->

  <!-- Help Section Start -->
  <section class="help-section">
    <div class="container">
      <div class="col-lg-12">
        <div class="help-content">
          <h2 class="heading-title">Current round {{ this.currentRound }}</h2>
          <div class="h-inner-content">
            <div class="round-container">
              <div class="row">

                <h5>
                 xBlade Contract address
                 </h5>

              </div>
              <div class="row">

                  <a style='font-size:12px;' href='https://bscscan.com/token/0x27a339d9b59b21390d7209b78a839868e319301b' target="_blank">0x27a339d9b59b21390d7209b78a839868e319301b</a>

                </div>
              <div class="row">
                <div style="margin-left:30px; margin-top:10px;">
                  <ul>
                    <li style="list-style: none; font-weight: bold;">📖 Rules</li>
                    <li style="list-style: disc"> You can only deposit once per round. </li>
                    <li style="list-style: disc"> You can only claim xBlade when claim is available for that round </li>
                    <li style="list-style: disc"> Read more at <a target="_blank" href="https://wiki.cryptowar.network/tokenomics">xBlade Tokenomics</a>, Join
                      <a target="_blank" href="https://t.me/elasticbitcoinxbt">Telegram</a>,
                      <a target="_blank" href="https://discord.gg/tWhbWySwCK">Discord</a>
                     </li>
                    </ul>
                  </div>
              </div>
            </div>

            <content-loader v-if="rounds.length==0" style="margin-bottom:20px;"></content-loader>
            <div v-for="round in rounds" :key="round.round">
              <Round
                :canClaim="round.canClaim"
                :maxVolume="round.maxVolume"
                :round="round.round"
                :totalDeposit="round.totalDeposit"
                :orders="round.orders"
                :maxDeposit="round.maxDeposit"
                :claimAt="round.claimAt"
                :yourDeposit="round.yourDeposit"
              />
            </div>
            <VPagination
              v-model="page"
              :pages="5"
              :range-size="1"
              active-color="#DCEDFF"
              @update:modelValue="updateHandler"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Help Section End -->
</template>

<script lang="ts">
import { mapActions, mapState } from "vuex";
import Round from "../components/Round.vue";
import VPagination from "@hennge/vue3-pagination";
import "../assets/css/vue3-pagination.css";
import { ContentLoader } from 'vue-content-loader';
export default {
  components: { Round, VPagination,ContentLoader },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapState(["defaultAccount", "currentRound", "rounds"]),
  },
  methods: {
    ...mapActions(["fetchCurrentRound", "initialize", "updatePageAndFetch", "connect", "disconnect"]),
    updateHandler(page: number) {
      // @ts-ignore
      this.$store.dispatch({
        type: "updatePageAndFetch",
        page,
      });
    },
  },
  async mounted() {
    await this.initialize();
  },
};
</script>

<style scoped>
.Page {
  font-size:21px !important;
}
.round-container {
  background-image: url(/src/assets/images/help-aside.jpg);
  background-position: center;
  background-size: cover;
  padding: 20px 30px 30px;
  border-radius: 20px;
  margin: 32px 0;
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