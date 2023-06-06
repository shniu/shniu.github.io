var relearn_search_index=[{content:`bbbb….
L1 network l1
L2 network l2
`,description:"",tags:null,title:"What is blockchain",uri:"/blockchain/0-introduction/index.html"},{content:`CS, Computer Science, 计算机科学是系统性研究信息与计算的理论基础以及它们在计算机系统中如何实现与应用的实用技术的学科；涵盖的内容非常多，但是最核心最基础的学科是计算机科学的基石，包括但不限于：
数据结构与算法 计算机组成原理（计算机体系结构与计算机工程） 操作系统 计算机网络 分布式系统 计算机安全和密码学 数据库 并行计算和分布式计算 编译原理 软件设计 … `,description:"",tags:["CS"],title:"CS",uri:"/basics/index.html"},{content:`Blockchain is a distributed ledger technology that allows for the creation of a decentralized network of computers that can store and share information in a secure.
怎么组织区块链相关的知识呢？
区块链原理：技术原理、经济模型等，以及常见的主网 Web3 热点 (Hot / Trend) BRC20 What is blockchain Blockchain Principle Smart Contracts L0 Layerzero `,description:"",tags:["Blockchain"],title:"Blockchain",uri:"/blockchain/index.html"},{content:`区块链原理
双花问题 Markel Tree 交易模型 最基础的两个：UTXO 和 账户模型
`,description:"",tags:null,title:"Blockchain Principle",uri:"/blockchain/principle/index.html"},{content:`总结分布式服务、互联网技术相关的知识。
存储服务 `,description:"",tags:["Distribute Service"],title:"Distribute Service",uri:"/distribute-service/index.html"},{content:`这里主要是关于智能合约。
`,description:"",tags:null,title:"Smart Contracts",uri:"/blockchain/smart-contracts/index.html"},{content:"",description:"",tags:null,title:"Backend Storage",uri:"/tags/backend-storage/index.html"},{content:"",description:"",tags:null,title:"Cache",uri:"/tags/cache/index.html"},{content:"",description:"",tags:null,title:"Middleware",uri:"/tags/middleware/index.html"},{content:"",description:"",tags:null,title:"Tags",uri:"/tags/index.html"},{content:`互联网服务中，缓存是提高系统性能的重要手段。缓存的设计需要考虑的因素很多，包括缓存的类型、缓存的位置、缓存的更新策略、缓存的一致性等等。本文将从这些方面来介绍缓存的设计。
缓存 缓存，是一种存储数据的组件，它的作用是让对数据的请求更快地返回。实际上，凡是位于速度相差较大的两种硬件之间，用于协调两者数据传输速度差异的结构，均可称之为缓存。
技术为业务服务，缓存也不例外；在业务系统中，主要会用到以下几种缓存：
本地缓存 (aka 进程内缓存) 分布式缓存 类似于 CDN 的静态数据缓存 进程内缓存 一般也叫 Local Cache, 是指缓存在应用进程内部的缓存，比如 Java 中的 HashMap、ConcurrentHashMap 等。这种缓存的特点是速度快，但是缓存的数据量有限，一般只能缓存一些热点数据；此外，这类缓存会引入多实例下数据短暂不一致的问题，所以在使用的时候要格外小心。
经常使用的 Local cache 有：Google Guava Cache、Caffeine、ConcurrentHashMap、Ehcache 等。目前 Caffeine 是性能最好的 Local Cache。此外，leveldb 也是一种本地缓存的实现，但是它是基于磁盘的，所以性能不如上面几种。
什么时候需要用本地缓存？什么场景不适合用？ 举几个场景
黑名单用户 ID / 白名单用户 ID；这种数据量不大，但是访问频率很高，所以可以用本地缓存，在启动时加载，运行过程中随着 Admin 的添加或者删除而更新 用户 ID 和 用户名、头像、昵称等的对应关系，由于某些原因我们一般指存储用户的 ID，当需要用户的其他信息时就需要从数据库中查询这些数据回来，如果每次都从 DB 中获取，显然对 DB 的压力很大，并且每次访问 DB 不是很有必要 分布式配置中心，为了降低业务服务对配置中心的压力，一般都是将数据缓存在本地，当有新的配置发布后，会通知业务服务中配置中心的 client，然后拉取新的配置，或者推送新的配置 总结一下
数据读多写少且对一致性要求不高的场景；如果一致性要求非常高，需要考虑使用分布式缓存，并且还要考虑数据库与分布式缓存的一致性问题 对性能要求极其严苛的场景，比如秒杀、抢购等 只读数据的场景 分布式缓存的普适性更强一些，很多场景都可以用分布式缓存来解决，如非必要，不建议使用本地缓存 (也就是说用了也要慎重) 优势是什么？劣势是什么？ Local Cache 和应用服务处于同一个进程内，且存储在内存中，一个字：快；无论对于 RT、QPS 还是吞吐量，都有极大增益。此外，也节省了内网带宽。
依据服务无状态设计的原则：尽量把数据的状态和存储放在专门的数据存储服务中，实例节点本身只做计算，不把数据状态和某个实例做耦合，这样在水平扩展时才能收放自如。本地缓存其实在一定程度上引入了状态，所以一个最需要关心的问题就是数据一致性，这一点有别于分布式缓存。
本地缓存：每个实例都有一份缓存，需要协调数据一致性问题 分布式缓存：缓存数据集中存放在独立的缓存服务中，每个实例是不存在缓存数据的，但是需要考虑缓存和 SOR (Source of Record) 的一致性问题 目前有哪些本地缓存的实现方案，各自的优缺点？ 编程语言的内置数据结构，比如 Java 中的 HashMap、ConcurrentHashMap 等 Google guava Caffeine Encache Leveldb / Rocksdb 本地缓存关注的技术点是什么？ 缓存命中率 缓存容量 缓存淘汰策略 缓存一致性 分布式缓存 TODO
缓存规范 JSR107 Spring Cache 缓存实践 缓存可以应对高并发大流量的场景。
在做缓存设计时，有一些误区要避开：
把缓存作为服务间传递数据的通道，这个要避免 使用缓存没有考虑雪崩的情况，这个要考虑 多服务共享一个缓存实例，这个最好要避免，多个服务之间缓存做垂直拆分 找几个例子分析一下
References 缓存设计 进程内缓存，究竟怎么玩？ 美团-缓存那些事儿 深入分布式缓存：从原理到实践 `,description:"",tags:["Backend Storage","Cache","Middleware"],title:"缓存设计",uri:"/distribute-service/backend-storage/cache/index.html"},{content:`后端存储是分布式服务中最重要的一部分。存储承担了数据的持久化、读写、查询等功能，一个安全可靠、快速稳定的存储基础设施是构建稳定的业务系统的基础。
根据不同的业务场景，选择使用不同的存储技术，是一种能力。
MySQL、Redis、ElasticSearch、HBase、Hive、MongoDB、RocksDB、CockroachDB 等等，这些存储还真就是谁都替代不了谁，每一种都有它擅长的地方，有它适用的场景，当然也有很突出的短板。如何根据业务系统的特点，选择合适的存储来构建我们的系统，是需要学习和掌握的。
目录列表
缓存设计 `,description:"",tags:null,title:"存储服务",uri:"/distribute-service/backend-storage/index.html"},{content:`大道至简，简则易行
学习不仅是为了找到答案，更是为了找到方法。 计算机科学领域的任何问题都可以通过增加一个间接的中间层来解决。 简单的设计是：设计者确定其设计已经达到了完美的标准不是不能再增加任何东西，而是不能再减少任何东西。 – 编程珠玑 程序员的主要问题与其说是技术问题，还不如说是心理问题，他不能解决问题，是因为他在企图解决错误问题，问题的最终解决， 是通过打破他的概念壁垒，进而去解决一个较简单的问题而实现的。 – 编程珠玑 如无必要，勿增实体。 – 奥卡姆剃刀原理 成为一名适应时代变化的软件工程师，知识体系的建设至关重要。
Quick Reference CS Blockchain Distribute Service How to organize 指导思想是以计算机基础知识为底座，并结合人类在各方面留下的宝贵经验和真理，延伸到更多的应用领域，注重实战。
基础知识 操作系统原理 网络原理 计算机组成原理 软件工程 编程语言 设计模式 架构设计 代码质量 代码重构 代码审查 代码测试 代码部署 代码发布 代码监控 代码运维 中间件 数据库 缓存 消息队列 搜索引擎 分布式文件系统 分布式数据库 分布式缓存 分布式消息队列 分布式搜索引擎 分布式事务 分布式锁 分布式调度 分布式配置 分布式日志 分布式监控 分布式追踪 分布式链路 分布式存储 分布式计算 分布式任务 分布式协调 topic 行业 区块链 人工智能 云计算 `,description:"",tags:null,title:"Overview",uri:"/index.html"},{content:`L0 Layerzero
aaa agegeg
bbb wefwef
abddd `,description:"",tags:null,title:"L0 Layerzero",uri:"/blockchain/l0-layerzero/index.html"},{content:"",description:"",tags:null,title:"Blockchain",uri:"/tags/blockchain/index.html"},{content:"",description:"",tags:null,title:"Categories",uri:"/categories/index.html"},{content:"",description:"",tags:null,title:"CS",uri:"/tags/cs/index.html"},{content:"",description:"",tags:null,title:"Distribute Service",uri:"/tags/distribute-service/index.html"},{content:`Projects…
`,description:"",tags:null,title:"My Projects",uri:"/more/projects/index.html"}]