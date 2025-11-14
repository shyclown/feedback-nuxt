<script setup lang="ts">
import { ref } from "vue";
import Summary from "~/components/summary/Summary.vue";
import CreateFeedback from "~/components/createFeedback/CreateFeedback.vue";
import type { SavedFeedback, User } from "~/types";
import Feedback from "~/components/summary/Feedback.vue";

const savedFeedback = ref<SavedFeedback | null>(null);
const givingFeedback = ref<boolean>(false);

const feedbacks = ref<SavedFeedback[]>([]);

const user: User = {
  id: 1,
  name: "Jack",
  surname: "Smith",
  email: "jack.smith.test@test.com",
  phoneNr: "+321 40 7654321",
};

$fetch("/api/feedback").then(async (response) => {
  // TODO: fix mismatch of types
  feedbacks.value = response as unknown as SavedFeedback[];
});

function giveFeedback() {
  givingFeedback.value = true;
}

function doneWithFeedback() {
  givingFeedback.value = false;
  feedbacks.value = [savedFeedback.value as SavedFeedback, ...feedbacks.value];
  savedFeedback.value = null;
}

function onSaveFeedback(feedback: SavedFeedback) {
  savedFeedback.value = feedback;
}
</script>

<template>
  <div
    v-if="!givingFeedback"
    class="flex flex-col items-center"
    data-testid="app"
  >
    <div class="flex justify-around mt-16 mb-16">
      <button
        class="bg-blue-500 rounded-md p-3 pl-10 pr-10 text-white text-md"
        @click="giveFeedback"
      >
        Give feedback
      </button>
    </div>

    <div class="flex flex-col gap-5 m-auto w-[400px]">
      <Feedback v-for="f in feedbacks" :key="f.id" :feedback="f" />
    </div>
  </div>

  <CreateFeedback
    v-if="givingFeedback && !savedFeedback"
    :user="user"
    :giving-feedback="givingFeedback"
    :on-save="onSaveFeedback"
  />

  <Summary
    v-if="givingFeedback && savedFeedback"
    :feedback="savedFeedback as SavedFeedback"
    :on-close="doneWithFeedback"
  />
</template>
