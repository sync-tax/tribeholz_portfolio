<script setup>
import { onMounted, nextTick } from "vue";
import Prism from "prismjs";

import Collapsible from "../../components/Collapsibles.vue";
import Back from "../../components/ProjectBack.vue";
import Overview from "../../components/ProjectOverview.vue";
import Image from "../../components/Image.vue";

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
        title="VJ-Setup v1.0"
        text="A Touchdesigner setup that uses a MIDI controller, to navigate and control a range of dynamic visuals during a concert we hosted at AEC Deep Space. "
      />

      <div class="mainProjectContent">
        <Image src="src/assets/images/v_spotlight_img2.png" alt="VJ_System" />
        <p class="contentNote">
          Here’s the basic setup – each visual is housed in its own Base
          component.
        </p>

        <pre><code class="language-python">
# map midi channels to their respective Base
channel_to_base = {
    'ch1ctrl20': op('v1'),
    'ch1ctrl24': op('v2'),
    'ch1ctrl28': op('v3'),
    'ch1ctrl32': op('v4'),
    'ch1ctrl54': op('v5'),
    'ch1ctrl62': op('v6')
}

def onValueChange(channel, sampleIndex, val, prev):
    # look up which Base corresponds to the changed channel
    base_op = channel_to_base.get(channel.name)
    if base_op is not None:
        base_op.allowCooking = (val > 0)

    return
</code></pre>
        <p class="contentNote">
          To keep things running smoothly, I added a small Python script that
          triggers with MIDI changes. When a visual's opacity drops to 0 (making
          it invisible), it turns off cooking to save on performance.
        </p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <h4>Overview</h4>
        <p>
          This project aimed to create an interactive realtime visual experience
          for the 808Spotlight concert.
        </p>

        <h4>Role</h4>
        <p>
          I designed and built the visual system and integrated it with a MIDI
          controller to trigger and manipulate procedural visuals in real-time.
          I also performed the visualisation during the concert.
        </p>

        <h4>Tools</h4>
        <p>
          - Touchdesigner <br />
          - Python <br />
          - MIDI Controller
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <h4>Downloads</h4>
        <p>
          <a
            target="_blank"
            href="https://drive.google.com/drive/u/1/folders/1q3PbSq1VdNGDDjJ9tW2eAR2bjTQ2lTS3"
            >→ .TOE-File + Assets</a
          >
        </p>
        <br />
        <h4>Event</h4>
        <p>
          <a target="_blank" href="https://808club.x-net.dev/808-spotlight/"
            >→ Website Entry</a
          >
          <br />
          <a target="_blank" href="https://www.instagram.com/p/DG5g0ggN2Oq/"
            >→ Promo Reel</a
          >
        </p>
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
