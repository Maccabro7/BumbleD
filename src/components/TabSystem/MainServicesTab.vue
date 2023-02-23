<template>
  <transition-group class="tab-h-container" name="tabsys" tag="div">
    <div
      v-for="(tab, index) in mainService"
      :key="index"
      class="tab"
      :class="{ active: horizontalTabID === index }"
      @click="handleTab(index)"
      @mouseenter="handleHover(index)"
      @mouseleave="handleHover(-1)"
    >
      <div
        class="tab-main-img"
        :class="{
          activeImg: horizontalTabID === index,
          activeHoverImg: hTabHover === index,
        }"
      >
        <img :src="tab.icon" alt="" fill="#fff" />
      </div>

      <span
        class="tab-main-title"
        :class="{
          activeTitle: horizontalTabID === index,
          activeHoverTitle: hTabHover === index,
        }"
        >{{ tab.title }}</span
      >
    </div>
  </transition-group>
</template>

<script>
import { useStore } from "../../Store/Store";
import { storeToRefs } from "pinia";

import mainServices from "../../Database/Data.json";
import { ref } from "@vue/reactivity";

export default {
  setup(props, { emit }) {
    const mainService = ref(mainServices.tabMainServicesSlides);

    const store = useStore();
    const { horizontalTabID, hTabHover } = storeToRefs(store);

    const handleTab = (index) => {
      store.setTabHorizontal(index);
      store.setMainService(mainService.value[index].service);
      emit("changeMainIndex", index);
    };

    const handleHover = (index) => {
      store.setHTabHover(index);
    };

    return {
      horizontalTabID,
      handleTab,
      handleHover,
      hTabHover,
      mainService,
    };
  },
};
</script>

<style scope>
.tab-h-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: var(--transition);
  margin: 0 auto;
  gap: var(--m-m);
  padding-bottom: var(--l-m);
  /* justify-content: space-around; */
}

.tab-main-img {
  display: flex;
  align-items: center;
  background-color: var(--primary-low-c);
  border-radius: 50%;
  opacity: 50%;
  transition: var(--transition);
}

.tab-main-img img {
  width: 36px;
  height: 36px;
  padding: 8px;
  /* filter: brightness(1000); */
}

.activeImg {
  opacity: 100%;
  background-color: var(--text-c);
  box-shadow: 0px 0px 16px rgba(255, 255, 255, 0.4);
}

.tab-main-title {
  display: none;
  width: 0%;
  overflow: hidden;
  transition: all var(--transition);
  padding-left: var(--s-m);
  width: max-content;
  color: var(--text-c);
}

.activeTitle {
  width: max-content;
  display: inline;
  font-family: Metropolis-SemiBold;
}

.tab {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.tabsys-move {
  transition: all var(--transition);
}

.activeHoverImg {
  opacity: 100%;
}

.activeHoverTitle {
  width: 100%;
  display: inline;
  width: max-content;
  /* transform: translateX(0); */
}

/* .tabsys-leave-active {
  position: absolute;
} */

/* .tabsys-move,
.tabsys-enter-active,
.tabsys-leave-active {
  
} */

/* .tabsys-enter-to,
.tabsys-leave-from {
  opacity: 100%;
  width: 100%;
  overflow: visible;
}

.tabsys-enter-from,
.tabsys-leave-to {
  opacity: 0;
  width: 0;
  overflow: hidden;
} */
</style>
