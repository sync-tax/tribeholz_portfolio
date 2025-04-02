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
        title="PokéMorph"
        text="Alternative evolution animation for Pokémon sprites."
      />
      <div class="mainProjectContent">
        <img src="../../assets/images/test.gif" alt="Pokemorph" width="60%" />

        <p class="contentNote" style="text-align: center">GIF: Evolite</p>
        <iframe
          width="600"
          height="337"
          src="https://www.youtube.com/embed/l1wTkWRXGMg?si=iOTDhpFIQTf8xd8F"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p class="contentNote">
          Tutorial on the morph animation in Touchdesigner.
        </p>
        <img
          src="../../assets/images/v_pokemorph_img1.png"
          alt="Pokemorph"
          width="100%"
        />
        <p class="contentNote">Touchdesigner Node System.</p>
        <pre><code class="language-python">
// Morph - FragmentShader

uniform float progress;
uniform float offset;
uniform float strength;

vec4 morph()
{
	//Top Right Offset
	vec4 tr_from_color = texture(sTD2DInputs[0], vUV.xy + vec2(offset,offset)) * (1-progress);
	vec4 tr_to_color = texture(sTD2DInputs[1], vUV.xy + vec2(offset,offset)) * progress;
	//Top Right Offset
	vec4 br_from_color = texture(sTD2DInputs[0], vUV.xy + vec2(offset,-offset)) * (1-progress);
	vec4 br_to_color = texture(sTD2DInputs[1], vUV.xy + vec2(offset,-offset)) * progress;
	//Top Left Offset
	vec4 tl_from_color = texture(sTD2DInputs[0], vUV.xy + vec2(-offset,offset)) * (1-progress);
	vec4 tl_to_color = texture(sTD2DInputs[1], vUV.xy + vec2(-offset,offset)) * progress;
	//Top Right Offset
	vec4 bl_from_color = texture(sTD2DInputs[0], vUV.xy + vec2(-offset,-offset)) * (1-progress);
	vec4 bl_to_color = texture(sTD2DInputs[1], vUV.xy + vec2(-offset,-offset)) * progress;
	
	vec4 sx = ((tl_from_color + tl_to_color + bl_from_color + bl_to_color) - 
	(tr_from_color + tr_to_color + br_from_color + br_to_color));
	
	vec4 sy = ((tr_from_color + tr_to_color + br_from_color + br_to_color) - 
	(tl_from_color + tl_to_color + tr_from_color + tr_to_color));
	
	vec2 slope = vec2(sx.r + sx.g + sx.b + sx.a, sy.r + sy.g + sy.b + sy.a);
	
	float limiter = dot(slope,slope) + strength;
	 
	vec2 morph = (slope / limiter) * strength;
	
	vec2 morph_from = morph * (1-progress);
	vec2 morph_to = morph * progress;
	
	
	vec4 from_color = texture(sTD2DInputs[0], vUV.xy - morph_to) * (1-progress);
	vec4 to_color = texture(sTD2DInputs[1], vUV.xy - morph_from) * progress;
	
	return mix(from_color, to_color, progress);
}

out vec4 fragColor;
void main()
{
	vec4 color = morph();
	fragColor = TDOutputSwizzle(color);
}
</code></pre>
        <p class="contentNote">GLSL Fragment Shader used for the animation.</p>

        <pre><code class="language-python">
path = r"C:\Users\rober\Desktop\TRIBΞHOLZ\!Touchdesigner\Projects\11 - Pokemon\assets\poke_sprites"

counter = 1

moviefiles = ["moviefilein1","moviefilein2"]

triggered_positive = False
triggered_negative = False

delay = op('constant1')['lfo_delay']

def onValueChange(channel, sampleIndex, val, prev):
    global triggered_positive, triggered_negative
    
    # set positive trigger flag | trigger stop_n_swap() at positive LFO peak
    if val >= 0.995 and not triggered_positive:
        triggered_positive = True 
        stop_n_swap()

    # set negative trigger flag | trigger stop_n_swap() at negative LFO peak
    if val <= -0.995 and not triggered_negative:
        triggered_negative = True
        stop_n_swap()

    # reset trigger flags
    if val < 0 and triggered_positive:
        triggered_positive = False
    if val > 0 and triggered_negative:
        triggered_negative = False


def stop_n_swap():
    global counter
    
    op('lfo1').par.play = 0

    run("op('lfo1').par.play = 1", delayFrames=delay)
    
    moviefile_to_update = "moviefilein1" if counter % 2 == 0 else "moviefilein2"
    new_pokemon = rf"{path}\pokemon ({counter}).png"
    
    op(moviefile_to_update).par.file = new_pokemon
    
    counter = (counter % 152) + 1
</code></pre>
        <p class="contentNote">
          Python Script used to iterate through folder containing all pokemon
          sprites.
        </p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <p>
          As a huge Pokémon fan I thought that morphing through the entire Gen1
          Pokédex would be a fun freetime activity.
          <br />
          <br />
          It was not only a great experience but also my first attempt with GLSL
          shaders. It took me a while to get the hang of it - not gonna lie.
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1AwBtOMceYr7AxiBmPK-23IB7UJHPs7WG?usp=sharing"
          >.TOX File + Assets</a
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
        <a class="refLinks" target="_blank" href="https://docs.gl/sl4/all"
          >GLSL</a
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
