<template>
  <div class="trade-tab-container">
    <div
      class="trade-services-tab-box"
      v-for="(tabs, index) in tradeTabs"
      :key="index"
      @click="handleTradeTabIndex(index)"
      @mouseenter="handleTradeTabHover(index)"
      @mouseleave="handleTradeTabHover(-1)"
    >
      <div
        class="trade-label-box"
        :class="{ activeLabelBox: tradeServiceIndex === index }"
      >
        <div
          class="trade-label-bg"
          :class="{
            activeTradeIcon: tradeServiceIndex === index,
            activeTradeIconHover: tradeServiceHover === index,
          }"
        >
          <img :src="tabs.icon" alt="" />
        </div>
        <div
          class="trade-label-text"
          :class="{
            activeTradeTitle: tradeServiceIndex === index,
            activeTradeTitleHover: tradeServiceHover === index,
          }"
        >
          {{ tabs.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import servicesData from "../Database/Data.json";
import { useStore } from "../Store/Store";
export default {
  setup(props, { emit }) {
    const tradeTabs = servicesData.TradeServices;
    const store = useStore();
    const { tradeServiceIndex, tradeServiceHover } = storeToRefs(store);

    const handleTradeTabIndex = (index) => {
      store.setTradeServiceIndex(index);
      emit("changeTradeIndex", index);
    };

    const handleTradeTabHover = (index) => {
      store.setTradeServiceHover(index);
    };

    return {
      tradeTabs,
      tradeServiceIndex,
      tradeServiceHover,
      handleTradeTabIndex,
      handleTradeTabHover,
    };
  },
};
</script>

<style scoped>
.trade-tab-container {
  height: 637px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.trade-services-tab-box {
  display: flex;
  gap: 32px;
}

.trade-label-box {
  display: flex;
  align-items: center;
  gap: var(--s-m);
  color: var(--text-c);
  /* opacity: 100%; */
  transition: var(--transition);
}

/* .trade-label-box:hover {
  opacity: 100%;
} */

.trade-label-bg {
  background-color: var(--primary-low-c);
  border-radius: 50%;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 50%;
  transition: var(--transition);
}

.trade-label-bg img {
  width: 32px;
  height: 32px;
  padding: 8px;
}

.trade-label-text {
  height: fit-content;
  width: 50%;
  opacity: 50%;
  transition: var(--transition);
}

/* .activeLabelBox {
  opacity: 100%;
  transform: scale(150%);
} */

.activeTradeIcon {
  opacity: 100%;
  box-shadow: 0px 0px 16px rgba(255, 255, 255, 0.4);
}

.activeTradeTitle {
  opacity: 100%;
  position: relative;
}

/* .activeTradeTitle::before {
  content: "";
  width: 70%;
  position: absolute;
  height: 2px;
  bottom: -3px;
  background-color: var(--primary-c);
} */

.activeTradeIconHover {
  opacity: 100%;
}

.activeTradeTitleHover {
  opacity: 100%;
}
</style>
