<template>
  <!-- Breadcrumb Area Start -->
  <section class="breadcrumb-area help">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Fair Distribution</h2>
        </div>
      </div>
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
            <div v-for="round in rounds" :key="round.round">
              <Round
                :canClaim="round.canClaim"
                :maxVolume="round.maxVolume"
                :round="round.round"
                :totalDeposit="round.totalDeposit"
                :orders="round.orders"
                :maxDeposit="round.maxDeposit"
              />
            </div>
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

export default {
  components: { Round },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapState(["defaultAccount", "currentRound", "rounds"]),
  },
  methods: {
    ...mapActions(["fetchCurrentRound", "initialize"]),
  },
  async mounted() {
    await this.initialize();
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