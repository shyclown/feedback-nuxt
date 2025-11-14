<template>
  <YogaCard>
    <section>
      <h1 class="text-[26px] font-bold mb-2">Thank you for your feedback!</h1>
      <p>
        Jooga studio has received your feedback. You can still edit your
        feedback or tell <br />
        us more about how we did, and how we coudl serve you better in the
        future.
      </p>
    </section>

    <section class="flex flex-row justify-between mb-4 mt-6">
      <input
        id="sentiment-poor"
        v-model="feedbackSentiment"
        class="hidden"
        type="radio"
        name="sentiment"
        value="poor"
      />
      <label for="sentiment-poor">
        <SentimentBox
          sentiment="poor"
          :selected="feedbackSentiment === 'poor'"
          text-content="Poor"
        />
      </label>

      <input
        id="sentiment-fair"
        v-model="feedbackSentiment"
        class="hidden"
        type="radio"
        name="sentiment"
        value="fair"
      />
      <label for="sentiment-fair">
        <SentimentBox
          sentiment="fair"
          :selected="feedbackSentiment === 'fair'"
          text-content="Fair"
        />
      </label>

      <input
        id="sentiment-satisfactory"
        v-model="feedbackSentiment"
        class="hidden"
        type="radio"
        name="sentiment"
        value="satisfactory"
      />
      <label for="sentiment-satisfactory">
        <SentimentBox
          sentiment="satisfactory"
          :selected="feedbackSentiment === 'satisfactory'"
          text-content="Satisfactory"
        />
      </label>

      <input
        id="sentiment-good"
        v-model="feedbackSentiment"
        class="hidden"
        type="radio"
        name="sentiment"
        value="good"
      />
      <label for="sentiment-good">
        <SentimentBox
          sentiment="good"
          :selected="feedbackSentiment === 'good'"
          text-content="Good"
        />
      </label>

      <input
        id="sentiment-excellent"
        v-model="feedbackSentiment"
        class="hidden"
        type="radio"
        name="sentiment"
        value="excellent"
      />
      <label for="sentiment-excellent">
        <SentimentBox
          sentiment="excellent"
          :selected="feedbackSentiment === 'excellent'"
          :text-content="'Excellent'"
        />
      </label>
    </section>

    <p class="font-semibold">
      Please tell us a bit more<span v-if="feedbackSentiment">
        why you chose {{ feedbackSentiment }}</span
      >?
    </p>
    <textarea
      v-model="feedbackMessage"
      class="border-1 rounded p-1 w-full h-[124px]"
      style="border-color: #ccd7df"
    />

    <div class="flex gap-2 items-baseline mt-6">
      <input
        id="make-public"
        v-model="makePublic"
        type="checkbox"
        class="border-2 rounded-3xl p-1"
      />
      <label for="make-public">
        <strong class="text-sm font-semibold">Make feedback public </strong>
        <br />
        <span class="text-gray-500 text-info-500">
          Your feedback may be displayed on Vello's healthcare and wellbeing
          <br />
          marketplace. In public feedback, your name ({{
            props.user.surname + " " + props.user.surname.charAt(0)
          }}) will be shown.
        </span>
      </label>
    </div>

    <div class="flex gap-2 items-baseline">
      <input
        id="keep-touch"
        v-model="keepInTouch"
        type="checkbox"
        class="border-2 rounded-3xl p-1"
      />
      <label for="keep-touch">
        <strong class="text-sm font-semibold">
          I wish that Yoga Studio will be in touch with me
        </strong>
        <br />
        <span class="text-gray-500 text-info-500">
          Contact: {{ props.user.email }}, {{ props.user.phoneNr }}
        </span>
      </label>
    </div>

    <div class="flex gap-2 items-baseline">
      <input
        id="policy-accepted"
        v-model="policyAccepted"
        type="checkbox"
        class="border-2 rounded-3xl p-1"
      />
      <label for="policy-accepted">
        <strong class="text-sm font-semibold">
          I agree to the processing of the feedback data in accordance with
          <br />
          the
          <a
            class="underline font-medium accent-blue-600 text-blue-500"
            href="/privacy-policy.pdf"
            target="_blank"
            @click="
              (e) => {
                // Do not select checkbox when clicking on the link
                e.preventDefault();
                e.stopPropagation();
              }
            "
            >Privacy Policy</a
          ></strong
        >
      </label>
    </div>

    <div class="flex justify-around mt-12">
      <button
        class="bg-blue-500 rounded-md p-4 pl-8 pr-8 text-white text-sm h-12 flex items-center"
        :class="{
          'opacity-50 cursor-not-allowed':
            !policyAccepted || !feedbackSentiment,
        }"
        :disabled="!policyAccepted || !feedbackSentiment"
        @click="submit"
      >
        Send feedback
      </button>
    </div>

    <div
      v-if="savingError"
      class="rounded p-2 border-2 border-red-700 text-red-700"
    >
      Error saving feedback. Please try again later.
    </div>
  </YogaCard>
</template>
<script setup lang="ts">
import YogaCard from "~/components/YogaCard.vue";
import SentimentBox from "~/components/sentiments/SentimentBox.vue";
import type { User } from "~/types.ts";
import type { SavedFeedback } from "~/types";

import { ref } from "vue";

const props = defineProps<{
  user: User;
  givingFeedback: boolean;
  onSave: (feedback: SavedFeedback) => void;
}>();

const feedbackMessage = ref("");
const feedbackSentiment = ref(null);
const makePublic = ref(false);
const keepInTouch = ref(false);
const policyAccepted = ref(false);

const savingError = ref(false);

async function submit() {
  try {
    const body = await $fetch("/api/feedback", {
      method: "post",
      body: {
        contact: keepInTouch.value,
        email: keepInTouch.value ? props.user.email : "",
        name: makePublic.value
          ? props.user.name + " " + props.user.surname.charAt(0)
          : "",
        sentiment: feedbackSentiment.value,
        shared: !!makePublic.value,
        text: feedbackMessage.value,
      },
    });
    props.onSave(body as unknown as SavedFeedback);
  } catch (error: unknown) {
    console.log("error", error);
    savingError.value = true;
  }
}
</script>
