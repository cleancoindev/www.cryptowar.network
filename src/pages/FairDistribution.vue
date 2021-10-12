<template>
  <!-- Breadcrumb Area Start -->
  <section class="breadcrumb-area help">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>
            xBlade Token <br />
            Fair Distribution
          </h2>
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
          <h2 class="heading-title" v-if="this.currentRound">
            Round {{ this.currentRound?.round }} / 96
          </h2>
          <div v-if="this.currentRound">
            <Round
              :canClaim="this.currentRound.canClaim"
              :maxVolume="this.currentRound.maxVolume"
              :round="this.currentRound.round"
              :totalDeposit="this.currentRound.totalDeposit"
              :orders="this.currentRound.orders"
              :maxDeposit="this.currentRound.maxDeposit"
              :claimAt="this.currentRound.claimAt"
              :yourDeposit="this.currentRound.yourDeposit"
              :amountTokenSale="this.currentRound.amountTokenSale"
              :price="this.currentRound.price"
              :minDeposit="this.currentRound.minDeposit"
            />
          </div>

          <div class="h-inner-content">
            <div class="round-container">
              <div class="row">
                <h5>xBlade Contract address</h5>
              </div>
              <div class="row" v-if="tokenDistributionContract">
                <a
                  style="font-size: 12px"
                  v-bind:href="`https://bscscan.com/token/${tokenDistributionContract?.options?.address}`"
                  target="_blank"
                  >{{ tokenDistributionContract?.options?.address }}</a
                >
              </div>
              <div class="row">
                <div style="margin-left: 30px; margin-top: 10px">
                  <ul>
                    <li style="list-style: none; font-weight: bold">
                      📖 Rules
                    </li>
                    <li style="list-style: disc">
                      You can only deposit once per round, you can deposit future rounds.
                    </li>
                    <li style="list-style: disc">
                      You can only claim xBlade when claim is available for that
                      round in below finished tab. If the pool > round max volume, you will get back BNB.
                    </li>
                    <li style="list-style: disc">
                      Read more at
                      <a
                        target="_blank"
                        href="https://wiki.cryptowar.network/tokenomics"
                        >xBlade Tokenomics</a
                      >, Join
                      <a target="_blank" href="https://t.me/elasticbitcoinxbt"
                        >Telegram</a
                      >,
                      <a target="_blank" href="https://discord.gg/tWhbWySwCK"
                        >Discord</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div v-if="!defaultAccount">
                <wallet-not-connect @connect-wallet="connectWallet" />
              </div>
            </div>

            <content-loader
              v-if="rounds.length == 0"
              style="margin-bottom: 20px"
            ></content-loader>
            <ul class="nav nav-pills nav-fill">
              <li class="nav-item" @click="currentTab = 'active'">
                <a
                  :class="`nav-link ${currentTab === 'active' ? 'active' : ''}`"
                  >Active</a
                >
              </li>
              <li class="nav-item" @click="currentTab = 'finished'">
                <a
                  :class="`nav-link ${
                    currentTab === 'finished' ? 'active' : ''
                  }`"
                  >Finished</a
                >
              </li>
            </ul>
            <div v-if="currentTab === 'active'">
              <div v-for="round in activeRounds" :key="round.round">
                <Round
                  :canClaim="round.canClaim"
                  :maxVolume="round.maxVolume"
                  :round="round.round"
                  :totalDeposit="round.totalDeposit"
                  :orders="round.orders"
                  :maxDeposit="round.maxDeposit"
                  :claimAt="round.claimAt"
                  :yourDeposit="round.yourDeposit"
                  :amountTokenSale="round.amountTokenSale"
                  :price="round.price"
                  :minDeposit="round.minDeposit"
                  :isFinished="false"
                />
              </div>
            </div>
            <div v-if="currentTab === 'finished'">
              <div v-for="round in finishedRounds" :key="round.round">
                <Round
                  :canClaim="round.canClaim"
                  :maxVolume="round.maxVolume"
                  :round="round.round"
                  :totalDeposit="round.totalDeposit"
                  :orders="round.orders"
                  :maxDeposit="round.maxDeposit"
                  :claimAt="round.claimAt"
                  :yourDeposit="round.yourDeposit"
                  :amountTokenSale="round.amountTokenSale"
                  :price="round.price"
                  :minDeposit="round.minDeposit"
                  :isFinished="true"
                />
              </div>
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
import { ContentLoader } from "vue-content-loader";
import WalletNotConnect from "../components/WalletNotConnect.vue";
export default {
  components: { Round, VPagination, ContentLoader, WalletNotConnect },
  data() {
    return {
      isOpen: false,
      currentTab: "active",
    };
  },
  computed: {
    ...mapState([
      "defaultAccount",
      "currentRound",
      "rounds",
      "tokenDistributionContract",
      "activeRounds",
      "finishedRounds",
    ]),
  },
  methods: {
    ...mapActions([
      "fetchCurrentRound",
      "initialize",
      "updatePageAndFetch",
      "connect",
      "disconnect",
    ]),
    updateHandler(page: number) {
      // @ts-ignore
      this.$store.dispatch({
        type: "updatePageAndFetch",
        page,
      });
    },
    connectWallet() {
      this.initialize();
    },
  },
  async mounted() {
    await this.initialize();
  },
};
</script>

<style scoped>
.Page {
  font-size: 21px !important;
}
.round-container {
  background-image: url(/src/assets/images/help-aside.webp);
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