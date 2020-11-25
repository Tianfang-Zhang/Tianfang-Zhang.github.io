---
title: "Infrared Small Target Detection via Non-Convex Rank Approximation Minimization Joint l2,1 Norm"
collection: publications
permalink: /publication/2018-11-13-paper-NRAM
excerpt: 'A novel method based on non-convex rank approximation minimization joint l2,1 norm (NRAM) was proposed.'
date: 2018-11-13
venue: 'November 13'
paperurl: # 'http://academicpages.github.io/files/paper2.pdf'
citation: 'Zhang L, Peng L, Zhang T, et al. Infrared small target detection via non-convex rank approximation minimization joint l2, 1 norm[J]. Remote Sensing, 2018, 10(11): 1821.'
---

Abstract
-----
To improve the detection ability of infrared small targets in complex backgrounds, a novel method based on non-convex rank approximation minimization joint l2,1 norm (NRAM) was proposed. Due to the defects of the nuclear norm and l1 norm, the state-of-the-art infrared image-patch (IPI) model usually leaves background residuals in the target image. To fix this problem, a non-convex, tighter rank surrogate and weighted l1 norm are instead utilized, which can suppress the background better while preserving the target efficiently. Considering that many state-of-the-art methods are still unable to fully suppress sparse strong edges, the structured l2,1 norm was introduced to wipe out the strong residuals. Furthermore, with the help of exploiting the structured norm and tighter rank surrogate, the proposed model was more robust when facing various complex or blurry scenes. To solve this non-convex model, an efficient optimization algorithm based on alternating direction method of multipliers (ADMM) plus difference of convex (DC) programming was designed. Extensive experimental results illustrate that the proposed method not only shows superiority in background suppression and target enhancement, but also reduces the computational complexity compared with other baselines.

[[Download paper here]](https://tianfang-zhang.github.io/files/NRAM.pdf)  
[[Code here]](https://github.com/Lanneeee/NRAM)

Citation: 
-----
> Zhang L, Peng L, Zhang T, et al. Infrared small target detection via non-convex rank approximation minimization joint l2, 1 norm[J]. Remote Sensing, 2018, 10(11): 1821.

```
@article{zhang2018infrared,
  title={Infrared small target detection via non-convex rank approximation minimization joint l2, 1 norm},
  author={Zhang, Landan and Peng, Lingbing and Zhang, Tianfang and Cao, Siying and Peng, Zhenming},
  journal={Remote Sensing},
  volume={10},
  number={11},
  pages={1821},
  year={2018},
  publisher={Multidisciplinary Digital Publishing Institute}
}
```