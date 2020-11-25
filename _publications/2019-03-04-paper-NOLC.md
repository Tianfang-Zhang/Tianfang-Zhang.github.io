---
title: "Infrared Small Target Detection Based on Non-Convex Optimization with Lp-Norm Constraint"
collection: publications
permalink: /publication/2019-03-04-paper-NOLC
excerpt: 'This paper proposes a novel infrared small target detection method based on non-convex optimization with Lp-norm constraint (NOLC). The NOLC method strengthens the sparse item constraint with Lp-norm while appropriately scaling the constraints on low-rank item, so the NP-hard problem is transformed into a non-convex optimization problem.'
date: 2019-03-04
venue: 'March 4'
paperurl: # 'https://tianfang-zhang.github.io/files/NOLC.pdf'
citation: 'Zhang T, Wu H, Liu Y, et al. Infrared small target detection based on non-convex optimization with Lp-norm constraint[J]. Remote Sensing, 2019, 11(5): 559.'
---

Abstract
-----

The infrared search and track (IRST) system has been widely used, and the field of infrared small target detection has also received much attention. Based on this background, this paper proposes a novel infrared small target detection method based on non-convex optimization with Lp-norm constraint (NOLC). The NOLC method strengthens the sparse item constraint with Lp-norm while appropriately scaling the constraints on low-rank item, so the NP-hard problem is transformed into a non-convex optimization problem. First, the infrared image is converted into a patch image and is secondly solved by the alternating direction method of multipliers (ADMM). In this paper, an efficient solver is given by improving the convergence strategy. The experiment shows that NOLC can accurately detect the target and greatly suppress the background, and the advantages of the NOLC method in detection efficiency and computational efficiency are verified.

[[Download paper here]](https://tianfang-zhang.github.io/files/NOLC.pdf)  
[[Code here]](https://github.com/Tianfang-Zhang/NOLC)

Citation: 
-----
If you find the code helpful in your resarch or work, please cite the following papers.

> Zhang T, Wu H, Liu Y, et al. Infrared small target detection based on non-convex optimization with Lp-norm constraint[J]. Remote Sensing, 2019, 11(5): 559.

```
@article{zhang2019infrared,
  title={Infrared small target detection based on non-convex optimization with Lp-norm constraint},
  author={Zhang, Tianfang and Wu, Hao and Liu, Yuhan and Peng, Lingbing and Yang, Chunping and Peng, Zhenming},
  journal={Remote Sensing},
  volume={11},
  number={5},
  pages={559},
  year={2019},
  publisher={Multidisciplinary Digital Publishing Institute}
}
```