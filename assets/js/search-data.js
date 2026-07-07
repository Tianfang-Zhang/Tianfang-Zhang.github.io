// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Blog/index.html";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Authors marked by * contributed equally.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Publications/";
          },
        },{id: "post-rpcanet-lt-sup-gt-lt-sup-gt-深度可解释的稀疏目标分割方法",
        
          title: "RPCANet&lt;sup&gt;++&lt;/sup&gt;：深度可解释的稀疏目标分割方法",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/rpcanet++/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-infrared-small-target-detection-based-on-non-convex-optimization-with-lp-norm-constraint-have-been-accpected-by-remote-sensing-for-detail",
          title: 'Our paper “Infrared Small Target Detection Based on Non-Convex Optimization with Lp-Norm Constraint”...',
          description: "",
          section: "News",},{id: "news-our-paper-zhang-t-peng-z-wu-h-et-al-infrared-small-target-detection-via-self-regularized-weighted-sparse-model-j-neurocomputing-420-124-148-have-been-published-online-pdf-version",
          title: 'Our paper “Zhang T, Peng Z, Wu H, et al. Infrared small target...',
          description: "",
          section: "News",},{id: "news-code-for-nolc-model-is-available-on-the-github-click-here-for-detail",
          title: 'Code for NOLC model is available on the Github, click Here for detail....',
          description: "",
          section: "News",},{id: "news-code-for-srws-model-is-avilable-on-the-github-click-here-for-detail",
          title: 'Code for SRWS model is avilable on the Github, click Here for detail....',
          description: "",
          section: "News",},{id: "news-i-am-working-on-a-summary-called-awesome-infrared-small-targets-have-a-look-if-you-are-interested",
          title: 'I am working on a summary called Awesome Infrared Small Targets, have a...',
          description: "",
          section: "News",},{id: "news-finished-my-phd-defence-thanks-to-my-supervisor-prof-zhenming-peng-and-all-the-people-who-helped-me-and-i-m-heading-to-industry-to-embrace-a-new-journey",
          title: 'Finished my PhD defence, thanks to my supervisor Prof. Zhenming Peng and all...',
          description: "",
          section: "News",},{id: "news-our-paper-focus-on-image-compressive-sensing-named-ct-net-was-published-online-by-knowledge-based-systems-kbs",
          title: 'Our paper focus on Image Compressive Sensing named CT-Net was published online by...',
          description: "",
          section: "News",},{id: "news-code-and-pre-trained-model-of-ct-net-and-lr-csnet-are-released-in-github-ct-net-and-github-lr-csnet",
          title: 'Code and pre-trained model of CT-Net and LR-CSNet are released in Github CT-Net...',
          description: "",
          section: "News",},{id: "news-our-work-focus-on-infrared-small-target-detection-via-deep-unfolding-network-titled-rpcanet-was-accpeted-by-ieee-cvf-winter-conference-on-applications-of-computer-vision-wacv-2024",
          title: '🎉🎉🎉 Our work focus on infrared small target detection via deep unfolding network...',
          description: "",
          section: "News",},{id: "news-code-and-pretrained-weights-of-our-work-on-lightweight-vision-transformers-named-as-cas-vit-were-accessible",
          title: 'Code and pretrained weights of our work on lightweight vision transformers named as...',
          description: "",
          section: "News",},{id: "news-after-few-round-of-review-our-paper-cas-vit-has-been-accepted-by-ieee-transactions-on-image-processing-tip-26-this-method-proposes-a-self-attention-alternative-structure-based-on-convolution-which-approximates-self-attention-without-explicitly-calculating-the-token-to-token-relationship-through-a-sigmoid-based-spatial-and-channel-mechanism-cas-vit-provides-a-feasible-and-effective-alternative-path-for-the-structural-design-of-vit-under-resource-constrained-conditions",
          title: '🎉🎉🎉 After few round of review, our paper CAS-ViT has been accepted by...',
          description: "",
          section: "News",},{id: "news-our-paper-paper-rpcanet-has-been-accepted-by-ieee-transactions-on-pattern-analysis-and-machine-intelligence-tpami-26-i-am-truly-honored-to-be-involved-in-the-development-of-deep-unfolding-networks-and-rpcanet-series-and-i-would-like-to-thank-dr-wu-and-prof-dai-for-their-work-more-detail",
          title: '🎉🎉🎉 Our paper paper RPCANet++ has been accepted by IEEE Transactions on Pattern...',
          description: "",
          section: "News",},{id: "news-our-lasted-work-on-deep-unfolding-titled-lcpnet-is-avaliable-at-arxiv-you-can-access-more-details-on-github",
          title: 'Our lasted work on deep unfolding titled LCPNet is avaliable at arxiv, you...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%70%61%72%6B%63%61%72%6C%65%74%6F%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Tianfang-Zhang", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4183-7053", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ROZkiXQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
