<template>
  <section class="default-layout">
    <SplashBlock />
    <RegistryAlert />
    <AboutIndex />
    <FormInfoWrapper />
    <AttentionBlock />
    <JoinBlock />
    <GovLicense />
  </section>
</template>

<script>
import SplashBlock from "@/components/indx/SplashBlock";
import RegistryAlert from "@/components/indx/RegistryAlert";
import AboutIndex from "@/components/indx/AboutIndex";
import FormInfoWrapper from "@/components/indx/FormInfoWrapper";
import AttentionBlock from "@/components/indx/AttentionBlock";
import JoinBlock from "@/components/indx/JoinBlock";
import GovLicense from "@/components/indx/GovLicense";

export default {
  transition: 'fade',

  components: {
    GovLicense,
    SplashBlock,
    RegistryAlert,
    AboutIndex,
    FormInfoWrapper,
    AttentionBlock,
    JoinBlock,
  },
}
</script>

<style>
</style>

