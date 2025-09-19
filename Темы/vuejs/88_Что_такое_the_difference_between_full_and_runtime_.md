# 88.  ### Что такое the difference between full and runtime only сборки?

There are two types of builds provided by VueJS,

     **1. Full:** These are the builds that contain both the compiler and the runtime.

     **2. Runtime Only:** These builds doesn't include compiler but the code is responsible for creating Vue instances, rendering and patching virtual DOM. These are about 6KB lighter min+gzip.