<template>
    <!-- section begin -->
    <section id="section-hero" aria-label="section" class="text-light overflow-hidden" data-bgimage="url(images/background/2.jpg) top">
        <div id="particles-js"></div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div id="mainmenu">
                        <div class="spacer-double"></div>
                        <h1>Create and sell your own unique NFTs.</h1>
                        <h4 >Easiest place to buy and sell cryptocurrency.<br>Sign up and get started today.</h4>
                        <div class="spacer-20" id="app">
                            <router-link :to="{ name: 'Market' }" class="btn-main" id="app"> Explore<span></span> </router-link>&nbsp;&nbsp;
                            <router-link :to="{ name: 'GenerateNFT' }" class="btn-main"> Create<span></span> </router-link>
                        </div>
                        <div class="spacer-double"></div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
    <!-- section close -->
</template>

<script>
    export default {
        name: 'TopParticle',
        components: {
        },
    }
</script>
