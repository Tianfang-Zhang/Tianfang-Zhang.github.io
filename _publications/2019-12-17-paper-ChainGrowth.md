---
title: "Structure-Adaptive Clutter Suppression for Infrared Small Target Detection: Chain-Growth Filtering"
collection: publications
permalink: /publication/2019-12-17-paper-ChainGrowth
excerpt: 'We propose a structure-adaptive clutter suppression method, called chain-growth filtering, for robust infrared small target detection.'
date: 2019-12-17
venue: 'December 17'
paperurl: # 'http://academicpages.github.io/files/paper2.pdf'
citation: 'Huang S, Liu Y, He Y, et al. Structure-Adaptive Clutter Suppression for Infrared Small Target Detection: Chain-Growth Filtering[J]. Remote Sensing, 2020, 12(1): 47.'
---

Abstract
-----
Robust detection of infrared small target is an important and challenging task in many photoelectric detection systems. Using the difference of a specific feature between the target and the background, various detection methods were proposed in recent decades. However, most methods extract the feature in a region with fixed shape, especially in a rectangular region, which causes a problem: when faced with complex-shape clutters, the rectangular region involves the pixels inside and outside the clutters, and the significant grey-level difference among these pixels leads to a relatively large feature in the clutter area, interfering with the target detection. In this paper, we propose a structure-adaptive clutter suppression method, called chain-growth filtering, for robust infrared small target detection. The well-designed filtering model can adjust its shape to fit various clutter structures such as lines, curves and irregular edges, and thus has a more robust clutter suppression capability than the fixed-shape feature extraction strategy. In addition, the proposed method achieves a considerable anti-noise ability by employing guided filter as a preprocessing approach and enjoys the capability of multi-scale target detection without complex parameter tuning. In the experiment, we evaluate the performance of the detection method through 12 typical infrared scenes which contain different types of clutters. Compared with seven state-of-the-art methods, the proposed method shows the superior clutter-suppression effects for various types of clutters and the excellent detection performance for various scenes.

[[Download paper here]](https://tianfang-zhang.github.io/files/ChainGrowth.pdf)  

Citation: 
-----
> Huang S, Liu Y, He Y, et al. Structure-Adaptive Clutter Suppression for Infrared Small Target Detection: Chain-Growth Filtering[J]. Remote Sensing, 2020, 12(1): 47.

```
@article{huang2020structure,
  title={Structure-Adaptive Clutter Suppression for Infrared Small Target Detection: Chain-Growth Filtering},
  author={Huang, Suqi and Liu, Yuhan and He, Yanmin and Zhang, Tianfang and Peng, Zhenming},
  journal={Remote Sensing},
  volume={12},
  number={1},
  pages={47},
  year={2020},
  publisher={Multidisciplinary Digital Publishing Institute}
}
```