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
        title="MIDI Boilerplate"
        text="I created a project starter boilerplate that I always use to kick off MIDI-driven live coding sessions in SonicPi."
      />

      <div class="mainProjectContent">
        <pre><code class="language-ruby">
_- {TrackTitle_v.X} ~ [chaotic_algorithms] by TRIBΞHOLZ -_
use_bpm 140
use_debug false
use_real_time

live_loop :metro do
  sleep 1
end

define :pattern do |p|
  return p.ring.tick == "x"
end

p = ("xxx-xxx-")

define :scale_midi do |val, min, max|
  return min + (val.to_f / 127) * (max - min)
end

$midi_values ||= Hash.new(0.0)

live_loop :midi_controls do
  key, value = sync "/midi:midi_mix_1:1/control_change"
  case key
  when 19
    $midi_values[19] = scale_midi(value, 0, 0.5)
  when 62
    $MASTER = scale_midi(value, 0, 1)
  end
end

live_loop :example, sync: :metro do
  if pattern(p)
    sample :bd_haus, amp: $midi_values[19] * $MASTER
  end
  sleep 1
end
</code></pre>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <p>
          While SonicPi enables scripting generative soundscapes, I personally
          prefer using the live loop feature. Controlling different parameters
          with a MIDI controller makes playing around even more fun.
          <br />
          <br />
          This boilerplate helps me jump straight into jamming.
        </p>
      </Collapsible>
      <Collapsible title="Features">
        <p>
          - Metronome: Syncing to it enables playing around with sleep values
          without getting out of sync.
          <br />
          <br />
          - Pattern Function: Easily define rhythmic patterns of instruments
          with simple Strings.
          <br />
          <br />
          - MIDI Scale Function: Remap the default MIDI control range to your
          desired range.
          <br />
          <br />
          - MIDI Mapper: Place the controls you want to map within the
          Switch-Case and call scale_midi(val, min, max) on them.
        </p>
      </Collapsible>

      <Collapsible title="Resources">
        <a
          target="_blank"
          href="https://github.com/sync-tax/sonicpi_livejam_boilerplate/blob/main/live_jam_boilerplate.rb"
          >GitHub - Code</a
        >
      </Collapsible>

      <Collapsible title="Technology">
        <a class="refLinks" target="_blank" href="https://sonic-pi.net/"
          >SonicPi</a
        >
        <br />
        <a class="refLinks" target="_blank" href="https://www.ruby-lang.org/en/"
          >Ruby</a
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
