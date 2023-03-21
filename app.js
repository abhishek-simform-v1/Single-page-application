const navbarToggle = document.querySelector(".navbar-toggle");
// const mobileHeader = document.querySelector(".mobile-header");
// const deskTopHeader = document.querySelector(".desktop-header");

// navbarToggle.addEventListener("click", () => {
//   if (mobileHeader.classList.contains("hide")) {
//     mobileHeader.classList.remove("hide");
//     deskTopHeader.classList.add("hide");

//     console.log("if");
//   } else {
//     mobileHeader.classList.add("hide");
//     console.log("else");
//     deskTopHeader.classList.remove("hide");
//   }
// });
const contentMenu = document.querySelector(".content-menu");
navbarToggle.addEventListener("click", () => {
  if (contentMenu.classList.contains("open")) {
    contentMenu.classList.remove("open");
    contentMenu.classList.add("close");

    console.log("if");
  } else {
    contentMenu.classList.add("open");
    contentMenu.classList.remove("close");
    console.log("else");
  }
});
{
  /* <hr class="rule-lg">
<div class="row p-t-sm">
  <div class="col-xs-12 col-md-2 p-r-md" style="height: 96%">
    <div class="sticky">
      <h2>Select Posts
        <span class="hidden-xs hidden-sm"><br></span>
        <a class="small nowrap" href="https://www.turnwall.com/articles/">All posts</a>
      </h2>
    </div>

  </div>
  <div class="col-xs-12 col-md-10">
    <hr class="rule hidden-md hidden-lg">
    <article id="post-2317"
      class="post-2317 post type-post status-publish format-standard has-post-thumbnail hentry category-design tag-bicycles">
      <div class="row row-10">

        <div class="col-sm-6 col-sm-7 col-xs-12">

          <p class="post-categories">
            <a href="https://www.turnwall.com/topics/design/" rel="category tag">Design</a>
          </p>

          <header class="entry-header">
            <h4>
              <a href="https://www.turnwall.com/articles/bicycles-design-inspiration/" rel="bookmark">Bicycles are
                my design inspiration—a Rapha 5×5 talk</a>
            </h4>
          </header>
          <p>I was recently invited to speak at an event called&nbsp;Rapha 5×5: Intervals on Design at Fresh
            Tilled Soil, a local design consultancy. It’s a traveling series of design talks that Rapha runs in
            different cities, and here’s the schtick: “5×5: Intervals on Design, a rapid-fire design talk where
            five creatives will talk for five minutes…</p>
          <div class="entry-meta">
            <!--  &nbsp; &bullet; &nbsp; -->
            <span class="span-reading-time rt-reading-time"><span class="rt-label rt-prefix"></span> <span
                class="rt-time"> 8</span> <span class="rt-label rt-postfix">minute read</span></span>
          </div>
        </div>

        <div class="col-md-4 col-sm-5 col-xs-12 text-right">

          <a href="https://www.turnwall.com/articles/bicycles-design-inspiration/" rel="bookmark"
            class="post-thumb">
            <img width="360" height="240"
              src="https://www.turnwall.com/wp-content/uploads/2016/10/Artboard-1-360x240.png"
              class="attachment-thumbnail size-thumbnail wp-post-image ls-is-cached lazyloaded" alt=""
              decoding="async" loading="lazy"
              data-src="https://www.turnwall.com/wp-content/uploads/2016/10/Artboard-1-360x240.png"><noscript><img
                width="360" height="240"
                src="https://www.turnwall.com/wp-content/uploads/2016/10/Artboard-1-360x240.png"
                class="attachment-thumbnail size-thumbnail wp-post-image" alt="" decoding="async" loading="lazy"
                data-eio="l" /></noscript> </a>

        </div>

      </div>
    </article>
    <article id="post-1821"
      class="post-1821 post type-post status-publish format-standard has-post-thumbnail hentry category-adventure tag-kayaking">
      <div class="row row-10">

        <div class="col-sm-6 col-sm-7 col-xs-12">

          <p class="post-categories">
            <a href="#" rel="category tag">Adventure</a>
          </p>

          <header class="entry-header">
            <h4>
              <a href="#" rel="bookmark">Talking to a giant tanker from a little plastic boat</a>
            </h4>
          </header>
          <p>It’s kayaking season here in New England, and as I was returning to the water this year I realized I
            needed to reacquaint&nbsp;myself with VHF radio usage. So I’m going to share this story from last
            summer in hopes that it helps some other kayakers in a similar situation, as I haven’t found a ton…
          </p>
          <div class="entry-meta">
            <!--  &nbsp; &bullet; &nbsp; -->
            <span class="span-reading-time rt-reading-time"><span class="rt-label rt-prefix"></span> <span
                class="rt-time"> 9</span> <span class="rt-label rt-postfix">minute read</span></span>
          </div>
        </div>

        <div class="col-md-4 col-sm-5 col-xs-12 text-right">

          <a href="#" rel="bookmark" class="post-thumb">
            <img width="360" height="240"
              src="https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-360x240.jpg"
              class="attachment-thumbnail size-thumbnail wp-post-image lazyautosizes ls-is-cached lazyloaded"
              alt="" decoding="async" loading="lazy"
              data-src="https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-360x240.jpg"
              data-srcset="https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-360x240.jpg 360w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-750x499.jpg 750w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-1024x682.jpg 1024w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-400x266.jpg 400w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040.jpg 2000w"
              data-sizes="auto" sizes="360px"
              srcset="https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-360x240.jpg 360w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-750x499.jpg 750w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-1024x682.jpg 1024w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-400x266.jpg 400w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040.jpg 2000w"><noscript><img
                width="360" height="240"
                src="https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-360x240.jpg"
                class="attachment-thumbnail size-thumbnail wp-post-image" alt="" decoding="async" loading="lazy"
                srcset="https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-360x240.jpg 360w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-750x499.jpg 750w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-1024x682.jpg 1024w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040-400x266.jpg 400w, https://www.turnwall.com/wp-content/uploads/2014/06/IMG_4040.jpg 2000w"
                sizes="(max-width: 360px) 100vw, 360px" data-eio="l" /></noscript> </a>

        </div>

      </div>
    </article>
    <article id="post-601"
      class="post-601 post type-post status-publish format-standard has-post-thumbnail hentry category-design tag-css tag-herber-matter tag-html tag-illustration tag-karl-gerstner tag-knolling tag-paula-scher">
      <div class="row row-10">

        <div class="col-sm-6 col-sm-7 col-xs-12">

          <p class="post-categories">
            <a href="#" rel="category tag">Design</a>
          </p>

          <header class="entry-header">
            <h4>
              <a href="https://www.turnwall.com/articles/gerstner-tische-inspiration/" rel="bookmark">Paying
                homage to (or stealing from) your inspiration</a>
            </h4>
          </header>
          <p>I had an idea for the new version of my site: I was going to illustrate objects using only HTML and
            CSS ( to show that I know how to do stuff with code), and make them look like they were neatly
            organized in a physical space*&nbsp;(which seems vaguely trendy) according to the underlying grid…</p>
          <div class="entry-meta">
            <!--  &nbsp; &bullet; &nbsp; -->
            <span class="span-reading-time rt-reading-time"><span class="rt-label rt-prefix"></span> <span
                class="rt-time"> 5</span> <span class="rt-label rt-postfix">minute read</span></span>
          </div>
        </div>

        <div class="col-md-4 col-sm-5 col-xs-12 text-right">

          <a href="#" rel="bookmark" class="post-thumb">
            <img width="360" height="240"
              src="https://www.turnwall.com/wp-content/uploads/2013/07/gerstner-tische-rotated-cover-e1374492107731-360x240.jpg"
              class="attachment-thumbnail size-thumbnail wp-post-image ls-is-cached lazyloaded" alt=""
              decoding="async" loading="lazy"
              data-src="https://www.turnwall.com/wp-content/uploads/2013/07/gerstner-tische-rotated-cover-e1374492107731-360x240.jpg"><noscript><img
                width="360" height="240"
                src="https://www.turnwall.com/wp-content/uploads/2013/07/gerstner-tische-rotated-cover-e1374492107731-360x240.jpg"
                class="attachment-thumbnail size-thumbnail wp-post-image" alt="" decoding="async" loading="lazy"
                data-eio="l" /></noscript> </a>

        </div>

      </div>
    </article>
  </div>

</div> */
}
