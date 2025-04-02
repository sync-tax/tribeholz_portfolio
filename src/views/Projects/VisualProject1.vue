<script setup>
import { onMounted, nextTick } from "vue";
import Prism from "prismjs";

import Collapsible from "../../components/Collapsibles.vue";
import Back from "../../components/ProjectBack.vue";
import Overview from "../../components/ProjectOverview.vue";

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div class="project">
    <Back />

    <section class="projectOverview">
      <Overview
        title="Spotlight"
        text="A concert I helped organizing with the 808Club @AEC. I was lucky enough to do the visuals in the Deep Space."
      />

      <div class="mainProjectContent">
        <img
          src="../../assets/images/v_spotlight_img1.png"
          alt="Spotlight image"
          width="100%"
        />
        <p class="contentNote">Concert recording on YouTube soon!</p>
        <br />
        <br />

        <img
          src="../../assets/images/v_spotlight_img2.png"
          alt="Spotlight image"
          width="100%"
        />
        <p class="contentNote">
          This Touchdesigner setup allowed me to control the different visuals
          via MIDI. Separate visuals are contained within the Base COMPS.
        </p>
        <pre><code class="language-python">
# map midi channels to their respective Base
channel_to_base = {
    'ch1ctrl20': op('club'),
    'ch1ctrl24': op('eye'),
    'ch1ctrl28': op('count'),
    'ch1ctrl32': op('blue'),
    'ch1ctrl54': op('justin'),
    'ch1ctrl62': op('treibholz')
}

def onValueChange(channel, sampleIndex, val, prev):
    # look up which Base corresponds to the changed channel
    base_op = channel_to_base.get(channel.name)
    if base_op is not None:
        base_op.allowCooking = (val > 0)

    return
</code></pre>
        <p class="contentNote">
          To avoid performance issues I added a little python script which
          executes on MIDI changes. Whenever a visuals opacity is down to 0 (not
          visible) it disables cooking.
        </p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <p>
          I had the opportunity to help my friends at the 808Club organizing a
          concert in the Ars Electronica Deepspace. Lucky me, had the chance to
          make the visuals in that awesome venue.
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <a
          href="https://drive.google.com/drive/u/1/folders/1q3PbSq1VdNGDDjJ9tW2eAR2bjTQ2lTS3"
          >.TOE-File + Assets</a
        >
      </Collapsible>

      <Collapsible title="Technology">
        <a class="refLinks" target="_blank" href="https://derivative.ca/"
          >Touchdesigner</a
        >
        <br />
        <a class="refLinks" target="_blank" href="https://www.python.org/"
          >Python</a
        >
      </Collapsible>
    </section>
  </div>
</template>

<style scoped>
.ease-in-enter-active,
.ease-in-leave-active {
  transition: opacity 0.2s ease-in;
  overflow: hidden;
}

.ease-in-enter-from,
.ease-in-leave-to {
  opacity: 0;
  max-height: fit-content;
}
</style>
