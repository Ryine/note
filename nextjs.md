# nextjs

## question
1. 哪些情况static render,哪些情况dranamic render

With Static Rendering, routes are rendered at build time

With Dynamic Rendering, routes are rendered at request time

默认情况下，使用这些API，会被处理成dranamic render，没有使用这些API的，会当作static render
- cookies
- headers
- connection
- draftMode
- searchParams prop
- unstable_noStore
- fetch with { cache: 'no-store' }

不默认的情况，即开启了cache component配置


2. 什么情况下会开启PPR（partial prefetch render）