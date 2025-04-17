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
        <Image src="/project_images/v_spotlight_img2.jpg" alt="VJ_System" />
        <p class="contentNote">
          Here’s the basic setup – each visual is housed in its own Base
          component. I MIDI-mapped each value, but you can also just use the
          sliders in the 'Constant CHOP'.
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
      <Collapsible title="Overview">
        <h4>About</h4>
        <p>
          This tool is designed to dynamically transition between different
          Touchdesigner patches and manipulate each patch in real-time. It
          allows you to VJ for various shows that require mixing multiple visual
          renderings.
        </p>

        <h4>Tools</h4>
        <p>
          - Touchdesigner <br />
          - Python <br />
          - MIDI Controller
        </p>
      </Collapsible>

      <Collapsible title="Features">
        <h4>Current | v1.0</h4>
        <p>
          - Seamless transitions between different patches <br />
          - Automatically pauses processing (cooking) for patches that aren’t
          currently visible
        </p>
        <h4>Future Updates | v2.0</h4>
        <p>
          - Compact Mixing TOX | 8 slots <br />
          - MIDI Mapping TOX | 24 knobs | 8 sliders <br />
          - User Interface
        </p>
      </Collapsible>

      <Collapsible title="Resources">
        <p>
          <a
            target="_blank"
            href="https://drive.google.com/drive/u/1/folders/1q3PbSq1VdNGDDjJ9tW2eAR2bjTQ2lTS3"
            >→ .TOE-File + Assets</a
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
