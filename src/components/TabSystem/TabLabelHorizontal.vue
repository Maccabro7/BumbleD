<!-- <template>
  <transition-group name="slide" tag="div">
    <div class="tab-label-h-container">
      <div class="tab-label-h-bg">
        <img :src="props.icon" alt="" />
      </div>
      <div
        class="tab-label-h-title"
        :class="{ tabActiveH: tabStore.horizontalTabID == props.id }"
      >
        {{ title }}
      </div>
    </div>
  </transition-group>
</template> -->

<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "../../Store/Store";

const store = useStore();
const { horizontalTabID } = storeToRefs(store);

const props = defineProps(["icon", "title", "id"]);

if (props.id === horizontalTabID) {
  tabActive = true;
}
// return { tabIcon, tabActive };
</script>

<style scoped>
.tabActiveH {
  background-color: red;
}
.tab-label-h-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-m);
  transition: 1s;
}

/* .tab-label-h-title {
  display: none;
  width: 0px;
  overflow: hidden;
  width: fit-content;
  opacity: 0;
  transition: 1s;
  transform: translateX(-30%);
} */

/* .tab-label-h-bg:hover + .tab-label-h-title {
  display: inline;
  opacity: 100;
  width: fit-content;
  overflow: visible;
  transform: translateX(0%);
  width: 100%;
  transition: 1s;
} */

.tab-label-h-title:hover {
  display: inline;
  width: max-content;
}

.tab-label-h-container::after {
}

.tab-label-h-container:hover {
  width: max-content;
}

.tab-label-h-container:hover::after {
}
.tab-label-h-bg img {
  width: 24px;
  height: 24px;
  padding: 8px;
}

.tab-label-h-bg {
  background-color: var(--primary-low-c);
  width: max-content;
  height: max-content;
  border-radius: 50%;
}

slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
