var relearn_search_index=[{content:`Java 是一种广泛使用的计算机编程语言，拥有跨平台、面向对象、泛型编程的特性，广泛应用于企业级 Web 应用开发和移动应用开发。
`,description:"",tags:null,title:"Java",uri:"/programming-language/java/index.html"},{content:`区块链原理
双花问题 Markel Tree 交易模型 最基础的两个：UTXO 和 账户模型
`,description:"",tags:null,title:"区块链概要",uri:"/blockchain/0-introduction/index.html"},{content:`CS, Computer Science, 计算机科学是系统性研究信息与计算的理论基础以及它们在计算机系统中如何实现与应用的实用技术的学科；涵盖的内容非常多，但是最核心最基础的学科是计算机科学的基石，包括但不限于：
数据结构与算法 计算机组成原理（计算机体系结构与计算机工程） 操作系统 计算机网络 分布式系统 计算机安全和密码学 数据库 并行计算和分布式计算 编译原理 软件设计 … `,description:"",tags:["CS"],title:"CS",uri:"/basics/index.html"},{content:`Blockchain is a distributed ledger technology that allows for the creation of a decentralized network of computers that can store and share information in a secure.
怎么组织区块链相关的知识呢？
区块链原理：技术原理、经济模型等，以及常见的主网 Wallet Web3 热点 (Hot / Trend) BRC20 区块链概要 Deep Understanding of Bitcoin Deep Understanding of Ethereum Wallet Smart Contracts Web3 Reference Blockchain Protocols - We research layer 1 blockchain protocols to provide the most accurate, up-to-date information on all of them and make this the easiest way for you to get to know and use them.
How does Bitcoin work? - 这是一个学习 Bitcoin 如何工作的网站，内容非常好
`,description:"",tags:["Blockchain"],title:"Blockchain",uri:"/blockchain/index.html"},{content:`深入学习 Bitcoin 及其工作原理，有几个非常不错的资源值得推荐
Mastering Bitcoin 2th edition learn me a bitcoin `,description:"",tags:null,title:"Deep Understanding of Bitcoin",uri:"/blockchain/bitcoin/index.html"},{content:`深入理解以太坊 专有名词 EOA, Contract Accounts, Account state, Account nonce, World state, Transaction, Receipt, Block, Uncle block, Nonce, Gas, Gas price, Gas Price Oracle
Zero Knowledge Proof, EVM, Message, RLP, MPT (Merkle Patricia Tree), Patricia Trie, Merkle Tree, Whisper, Light Ethereum Subprotocol, Swarm, LLL, Sperpent, Mutan, Solidity, EIPs(ERC20, ERC721)
Uncle block
Uncle blocks (or Ommer) are created when two or more miners create blocks at nearly the same time. Only one block can be mined and accepted as canonical on the blockchain. The others are uncle blocks, which are not included but still provide a reward to their miners for the work done.
在比特币网络中，uncle block 是没有奖励的；但在以太坊网络中，uncle block 有奖励，并且一个区块最多能引用 2 个 uncle block;
uncle block reward 是奖励给 uncle block 的矿工的，前提是被确认的区块引用了这个 uncle block 包含了 uncle block 的区块，会获得一个额外的奖励，这个奖励是 uncle block reward 的 1/32 主要作用是：提高网络安全性，提高矿工的积极性 以太坊为什么要设置区块的叔块奖励？ There are two uncle rewards 在以太坊升级 PoS 后，uncle block 还有吗？
Block header structure change under the Merge to Proof of Stake? How The Merge Impacts Ethereum’s Application Layer 总结下来，以太坊从 PoW 升级到 PoS 后，部分和 PoW 共识相关的字段就无用了，但是出于兼容和一致性的考虑，这些字段会被设置默认值，其中 uncle (Ommer) 是其中一项。
In order to minimize disruption to tooling and infrastructure, these fields are set to 0, or their data structure’s equivalent, rather than being entirely removed from the data structure. The full changes to block fields can be found in EIP-3675.
账户模型 以太坊中，账户分为：外部账户（EOAs）和合约账户（contract account）
参考
账户 EOAs EOAs-外部账户(external owned accouts)是由人们通过私钥创建的账户。 是真实世界的金融账户的映射，拥有该账户私钥的任何人都可以控制该账户。 如同银行卡，到ATM机取款时只需要密码输入正确即可交易。 这也是人类与以太坊账本沟通的唯一媒介，因为以太坊中的交易需要签名， 而只能使用拥有私有外部账户签名。
外部账户特点总结：
拥有以太余额。 能发送交易，包括转账和执行合约代码。 被私钥控制。 没有相关的可执行代码。 合约账户 含有合约代码的账户。 被外部账户或者合约创建，合约在创建时被自动分配到一个账户地址， 用于存储合约代码以及合约部署或执行过程中产生的存储数据。 合约账户地址是通过SHA3哈希算法产生，而非私钥。 因无私钥，因此无人可以拿合约账户当做外部账户使用。 只能通过外部账户来驱动合约执行合约代码。
// 合约地址生成算法 // sender: 指交易的发起者的地址 // nonce: 指该交易的随机数 Keccak256(rlp([sender,nonce])[12:]) 合约账户特点总结：
拥有以太余额。 有相关的可执行代码（合约代码）。 合约代码能够被交易或者其他合约消息调用。 合约代码被执行时可再调用其他合约代码。 合约代码被执行时可执行复杂运算，可永久地改变合约内部的数据存储。 账户抽象 在最近的 EIP 中提出了账户抽象的概念(关于账户抽象看 Account abstraction)
账户数据结构 type Account struct { Nonce uint64 Balance *big.Int Root common.Hash CodeHash []byte } 以太坊中的交易 指由一个外部账户转移一定资产给某个账户， 或者发出一个消息指令到某个智能合约
参考资料
以太坊技术与实现 - 交易 区块链架构之美 - EVM / Transaction 深入理解以太坊 Ethereum Node Architecture 在 The Merge 之后，以太坊节点有两部分组成：执行客户端 (EL, Execution Client) 和共识客户端 (CL, Consensus Client):
EL 负责交易处理，交易广播，状态管理以及对 EVM 的支持 Geth 是一种 EL 的实现，还有其他的实现，比如 Parity CL 负责区块创建，区块广播和共识逻辑 这里可以找到有哪些共识客户端 共识客户端可以变为 Validator，前提是需要像 deposit contract 存入 32 ETH EL 和 CL 之间的通信使用的是 Engine API, 基于本地的 JSON-RPC CL 是在 The Merge 之后开始生效的，正式从 PoW 切换到 PoS 他们之间的关系如下图
几个规范需要关注
Execution API Execution Specs Engine API Consensus Specs References 深入理解以太坊 - 简要介绍以太坊的架构 以太坊设计与实现 - 一本深入探讨以太坊实现的电子书 go-ethereum doc - geth 的官方文档 Ethereum Blog `,description:"",tags:null,title:"Deep Understanding of Ethereum",uri:"/blockchain/ethereum/index.html"},{content:`不需要面面俱到的记录和 Copy，只记录自己的一些疑惑，以及一些有意思的东西。
Golang 基础知识 Golang 的数据类型有哪些？引用类型和值类型的区别？什么时候用引用类型，什么时候用值类型？
Reference Everything about Golang - 之前记录的一些笔记 `,description:"",tags:["Golang"],title:"Golang",uri:"/programming-language/golang/index.html"},{content:`作为用户，Wallet 是区块链的入口；现阶段主流的 Wallet 类型有：HD Wallet，MultiSig wallet，Custodial wallet，Hardware wallet，Paper wallet，MPC Wallet 等。作为开发者，HD Wallet、MultiSig Wallet、MPC Wallet 是需要重点掌握的。
HD wallet 钱包是用来存钱的，在区块链中，我们的数字资产都会对应到一个账户地址上， 只有拥有账户的钥匙（私钥）才可以对资产进行消费（用私钥对消费交易签名）。
他们之间的关系如下：
私钥通过椭圆曲线生成公钥， 公钥通过哈希函数生成地址，这两个过程都是单向的; 所以，数字钱包实际是一个管理私钥（生成、存储、签名）的工具，注意钱包并不保存资产，资产是在链上的。
生成私钥的本质是在 1 到 2^256 之间选一个数字：生成密钥的第一步也是最重要的一步，是要找到足够安全的熵源，即随机性来源，只要选取的结果是不可预测或不可重复的
HD, Hierarchical Deterministic, 叫做分层确定性钱包，是一种可以从单个种子（seed）衍生出一系列私钥的钱包结构，这些私钥都可以被根种子所控制，这样就可以用一个种子来管理多个账户。
在 Mastering Bitcoin 中，有一章是来介绍 Wallet 的，有必要看一下：Mastering Bitcoin - Wallet, 中文版看这里
HD 钱包允许我们使用一个密钥管理很多个衍生私钥，进而控制多个地址，bip32 规范中使用一种树形结构来进行管理。
关于 HD wallet 有一系列规范：
bip32 bip44 bip39 bip43 bip39 bip39 规范主要关于生成确定性密钥的助记码，使用一组预定义的单词来表示一串随机数，这样就可以方便的记忆和传输。主要包含两部分：生成助记码和从主机码转成二进制私钥种子。
我们来看看 bip39 的技术细节
如何生成助机词
Create a random sequence (entropy) of 128 to 256 bits. Create a checksum of the random sequence by taking the first (entropy-length/32) bits of its SHA256 hash. Add the checksum to the end of the random sequence. Split the result into 11-bit length segments. Map each 11-bit value to a word from the predefined dictionary of 2048 words. The mnemonic code is the sequence of words. 随机熵和单词长度的关系：
Entropy (bits) Checksum (bits) Entropy + checksum (bits) Mnemonic length (words) 128 4 132 12 160 5 165 15 192 6 198 18 224 7 231 21 256 8 264 24 用助记词生成种子
The first parameter to the PBKDF2 key-stretching function is the mnemonic produced from step 6. The second parameter to the PBKDF2 key-stretching function is a salt. The salt is composed of the string constant “mnemonic” concatenated with an optional user-supplied passphrase string. PBKDF2 stretches the mnemonic and salt parameters using 2048 rounds of hashing with the HMAC-SHA512 algorithm, producing a 512-bit value as its final output. That 512-bit value is the seed. 参考实现：
go 版本的 bip39 实现 源码解析
func NewEntropy(bitSize int) ([]byte, error) { // 验证位数在 128 到 256 之间，并且是 32 的倍数 if err := validateEntropyBitSize(bitSize); err != nil { return nil, err } entropy := make([]byte, bitSize/8) // 这里使用的是 crypto/rand 包，而不是 math/rand 包，因为 math/rand 包是伪随机数生成器 // 这里显然需要一个真随机数生成器 _, _ = rand.Read(entropy) return entropy, nil } // 用法 entropy, _ := bip39.NewEntropy(256) mnemonic, _ := bip39.NewMnemonic(entropy) seed := bip39.NewSeed(mnemonic, "hello") 总结一下：bip39 的主要作用就是把随机生成的 seed 转成助记词，方便记忆、传输等，不管是导入、导出还是备份都非常方便，并且从助记词也可以还原出 seed。
bip32 \u0026 bip44 从种子生成钱包
上面了解了 bip39，通过 bip39 我们可以获取一个助记词序列，它本质上是一个随机数，这个随机数被用来当作 seed 来生成私钥。bip32 规范主要是定义了从 seed 生成私钥的过程，它定义了一种树形结构来管理私钥，这种树形结构的每个节点都有一个索引，这个索引可以用来生成子节点，这样就可以方便的管理多个私钥。
关于 extended key 也可以看这里：extended keys
参考实现
go 版本的 hdkeychain - 里面包含对 extended key 的实现，也就是实现了 bip32 规范 Keys 和 Addresses 在上面介绍的几个 bip 规范中，其实少了一些细节，比如私钥如何生成公钥？公钥如何生成地址？不同的链使用的算法都一样吗？…
关于这些问题可以参考这篇文章：Mastering Bitcoin - Keys and Addresses
Chain Private Key -\u003e Public Key Compressed Public Key ? Public Key -\u003e Address Address Format BTC ECDSA (ecc Secp256k1) Yes SHA256 + RIPEMD160 Base58 ETH ECDSA (ecc Secp256k1) Yes Keccak256 Hex BNB ECDSA (ecc Secp256k1) Yes Keccak256 Bech32 对于地址生成算法，不同的链不太一样
Bitcoin 采用 SHA256 + RIPEMD160, 然后再进行 Base58 编码 Ethereum 采用 Keccak256, 然后再进行 Hex 编码 对公钥做 Keccak-256 哈希运算，然后取最后的 40 位 16 进制字符 实现一个支持多链的 HD 本地钱包 一些想法
这个本地钱包，我们暂时叫他 hdkms，后面都这么叫 hdkms 支持管理多个钱包，可以通过指定 name 来区分不同的 hd wallet wallet1 -\u003e mnemonic -\u003e seed -\u003e master private key -\u003e local keystore file1 wallet2 -\u003e mnemonic -\u003e seed -\u003e master private key -\u003e local keystore file2 hdkms 支持导入助记词、私钥 hdkms 支持导出助记词、私钥 hdkms 支持生成地址，并且可以指定 index hdkms 可以查看 address 的余额 hdkms 支持多链 比如 Bitcoin, Ethereum, Binance Smart Chain etc. hdkms 可以离线签署交易，生成签名后的交易数据 支持 native token 的 transfer 支持 erc20 支持 NFT 支持任意类型的合约 hdkms 可以在线广播交易 broadcast tx 查询 tx 状态 hdkms 一些高级功能 支持 event 监听 支持动态手续费，比如 gas fee，network fee 等 … # 考虑怎么使用 # 1. 提供命令行工具，比如 hd-kms # 创建钱包 hdkms wallet generate --wallet-name test1 --passphase 123456 hdkms wallet import --wallet-name test1 --mnemonic "" --passphase 123456 $ hdkms wallet export --wallet-name test1 $ {"mnemonic": "xxx", "passphase": ""} TODOs
搭建起项目的基本框架 搞定 cli 及其扩展子命令 支持多个子命令的调用，比如 hdkms wallet generate, hdkms wallet list … 支持 Ethereum generate wallet mnemonic store mnemonic or private key to local keystore file get address by index query balance by address `,description:"",tags:null,title:"Wallet",uri:"/blockchain/wallet/index.html"},{content:`总结分布式服务、互联网技术相关的知识。
后端存储以及存储服务 BFF `,description:"",tags:["Distribute Service"],title:"Distribute Service",uri:"/distribute-service/index.html"},{content:` 把后端存储当成一个贯穿很多知识点的 Topic，这样可以把相关的知识点串联起来，形成一个完整的知识体系。
后端存储是分布式服务中最重要的一部分。存储承担了数据的持久化、读写、查询等功能，一个安全可靠、快速稳定的存储基础设施是构建稳定的业务系统的基础。
根据不同的业务场景，选择使用不同的存储技术，是一种能力。
MySQL、Redis、ElasticSearch、HBase、Hive、MongoDB、RocksDB、CockroachDB 等等，这些存储还真就是谁都替代不了谁，每一种都有它擅长的地方，有它适用的场景，当然也有很突出的短板。如何根据业务系统的特点，选择合适的存储来构建我们的系统，是需要学习和掌握的。
目录列表
缓存设计 TODOs
分库分表 ShardingSphere JDBC `,description:"",tags:null,title:"后端存储以及存储服务",uri:"/distribute-service/backend-storage/index.html"},{content:`编程语言相关的知识。
Java Golang `,description:"",tags:null,title:"Programming Language",uri:"/programming-language/index.html"},{content:`Backend for Frontend 是一种模式，在构建 API 时当然可以不选择使用 BFF，取而代之的是对多个 UI 终端提供一个统一的 API，但是不可避免的会带来一些问题：
不同的 UI 终端展示的数据是不一样的，比如 Web H5 和 App 之间会存在较大的差异 不同的 UI 终端可能会有不同的逻辑，比如有些数据是 Web 用，有些则是 App 用，这样都放在一个接口里的话，对不同的终端来说，都会有一些无用的数据，或者是无用的逻辑，这样会导致接口的复杂度增加，维护成本增加；从节约流量和资源的角度说，移动端应该尽可能少的去拉取数据 统一的 API 在开发新功能时，可能会对不同 UI 终端都产生影响，而且功能逻辑会相互耦合；也就是说一个接口承担了更多的职责 总结来看：由于不同终端的差异性，导致对后端 API 的数据产生了不同的需求，驱动我们去考虑针对不同的 UI 来定制不同的接口。
通用的 API 后端和团队组成如下
使用 BFF The goal of the BFF pattern is to decouple the front-end applications from the back-end services and to reuse the APIs while ensuring that it doesn’t cause over-fetching or over-requesting on the client-side. This is accomplished by developing a dedicated back-end for each front-end service. The BFF transforms the data into the correct format that the client application needs.
BFF 的接口通常是由前端开发人员来定义，由后端开发人员来实现 BFF API 一般以 UI 为依据，这样更集中 至于是不是必须为每个类型的终端都定义不同的 BFF，这个需要根据实际情况来判断，或者团队来决定采用何种模式；比如 iOS 和 Android 的 UI 体验几乎完全一致，我们有必要指提供一套 BFF，而不是一个 iOS BFF 和一个 Android BFF；所以具体情况还要具体分析，没有一个标准答案 在调用多个下游服务时，使用 RxJava 或 Finagle 这类响应式编程风格的方式会更加的易于管理，而且可以更好的控制并发度，提高性能 在使用 BFF 时带来的最大困扰是重复代码，这个可能无法避免，但是在合理的情况下可以考虑复用代码、抽象代码达到消除重复的目的 一个指导规则可能是：如果被提取的功能不必同时更新，则使用共享库，但如果需要，则使用服务。 谈论复制和重用，不要试图从一开始就让一切通用。如果你尝试，并且它在整个组织中使用，就会引起摩擦，因为很多人都想做出贡献。在考虑通用用法之前，请专注于您的功能和特定用例。“特殊功能优先于通用用法”策略效果更好。在考虑提取代码时，不要忘记有用的“三法则”。 关于 BFF 的实践可以看一下 BFF @ SoundCloud 这篇文章，里面有一些很好的实践经验。
什么时候用 BFF ? 当你有多个微服务，并且需要应对不同的 UI 终端，而且这些终端之间存在差异性，可以考虑使用 BFF 模式。
Event-driven BFF AWS 提出了一个 event-driven BFF 的东西: Backends for Frontends Pattern by AWS
右边是微服务或单体服务发出的 event，这些 event 在 Domain 发生更新时发出 中间是 Event bus，接收 event 后转发给左边的 BFF 层的订阅者 左边是 BFF 的实现，不同的 BFF 可以有不同的数据库投影，根据具体的需求来定制数据结构，当然也可以支持 CDC 模式 还有一种更加云原生的方式来构建服务
Reference Pattern: Backends For Frontends - Sam Newman 写的关于 BFF 模式的文章 BFF 架构简介 BFF @ SoundCloud A Deep Dive into the Back-End for Front-End Pattern Backends for Frontends Pattern Seamlessly Swapping the API backend of the Netflix Android app - Netflix Android App 的 BFF 实践 Backend for frontend (BFF) pattern— why do you need to know it? Backends for Frontends pattern by Azure `,description:"",tags:null,title:"BFF",uri:"/distribute-service/bff/index.html"},{content:`这里主要是关于智能合约。
`,description:"",tags:null,title:"Smart Contracts",uri:"/blockchain/smart-contracts/index.html"},{content:`有理由相信 Web3.0 是下一代的价值互联网。
Web3 基础设施及工具 References 这里列出了一些 Web3.0 的相关资料，以供参考。
The Architecture of a Web 3.0 application - 主要介绍相对于 web2.0，web3.0 的架构是怎样的。
Web3 Architecture and Tech Stack : A Beginners Guide
A simple guide to the Web3 stack
A simple guide to the web3 developer stack
What Goes Behind Web 3.0 Architecture?
Application-Specific Blockchains: The Past, Present, and Future - 介绍
`,description:"",tags:null,title:"Web3",uri:"/blockchain/web3/index.html"},{content:`测试网络 Goerli Testnet Goerli (Goerlitzer Testnet) Goerli Testnet Explorer Görli beacon Testnet 搭建私有以太坊私有网络 搭建私有网络
# 1. Clone go-ethereum git clone https://github.com/ethereum/go-ethereum.git # 2. Build go-ethereum, make sure you have installed go, version \u003e= 1.19 cd go-ethereum \u0026\u0026 make all # 3. Copy geth to $GOPATH/bin cp build/bin/geth $GOPATH/bin # 3. Create private network with two nodes cd $HOME/priveth \u0026\u0026 mkdir node1 node2 # 4. Create accounts # On node1 geth --datadir $HOME/priveth/node1 account new # Password: foobar # Account1 -\u003e Public address of the key: 0x46eE6c1779eB3421Fc355132D867804894eFB1F9 # Account2 -\u003e Public address of the key: 0x4B3Beee7E6E067080f71336fF118E76E53C63cA3 # Signer address -\u003e 0x3D43ed16b178611C0aBA87a00Dd6b2655aa89287 # On node2 geth --datadir $HOME/priveth/node2 account new # Public address of the key: 0x69b24ce645c0Bbdfcc0FE4297804b82F888DE8Fe # 5. Create genesis config geth --datadir $HOME/priveth/node1 init genesis.json geth --datadir $HOME/priveth/node2 init genesis.json # 6. Start bootnode, 在其中一个 node 启动即可 bootnode -genkey boot.key bootnode -nodekey boot.key -addr :30305 # 6. Start # Start node1, locate to $HOME/priveth geth --datadir node1 --port 30306 --bootnodes 'enode://3988b0cf1d24581e50d1a888e0c9588b1f7403477cf621f46c7add34b2bf786865601c4b6a07924e5f1eed250214192355b5ea5571e5887055e464ccb91dce3e@127.0.0.1:0?discport=30305' --networkid 12345 --unlock 0x3D43ed16b178611C0aBA87a00Dd6b2655aa89287 --password node1/walletpwd.txt --authrpc.port 8551 --http.vhosts=* # Start node2 geth --datadir node2 --port 30307 --bootnodes 'enode://3988b0cf1d24581e50d1a888e0c9588b1f7403477cf621f46c7add34b2bf786865601c4b6a07924e5f1eed250214192355b5ea5571e5887055e464ccb91dce3e@127.0.0.1:0?discport=30305' --networkid 12345 --unlock 0x69b24ce645c0Bbdfcc0FE4297804b82F888DE8Fe --password node2/walletpwd.txt --authrpc.port 8552 # Attach geth attach node1/geth.ipc curl --data '{"jsonrpc":"2.0","method":"eth_getBalance", "params": ["0x3D43ed16b178611C0aBA87a00Dd6b2655aa89287", "latest"], "id":2}' -H "Content-Type: application/json" localhost:8551 genesis.json content
{ "config": { "chainId": 12345, "homesteadBlock": 0, "eip150Block": 0, "eip155Block": 0, "eip158Block": 0, "byzantiumBlock": 0, "constantinopleBlock": 0, "petersburgBlock": 0, "istanbulBlock": 0, "muirGlacierBlock": 0, "berlinBlock": 0, "londonBlock": 0, "arrowGlacierBlock": 0, "grayGlacierBlock": 0, "clique": { "period": 5, "epoch": 30000 } }, "difficulty": "1", "gasLimit": "800000000", "extradata": "0x00000000000000000000000000000000000000000000000000000000000000003D43ed16b178611C0aBA87a00Dd6b2655aa892870000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "alloc": { "3D43ed16b178611C0aBA87a00Dd6b2655aa89287": { "balance": "500000" }, "69b24ce645c0Bbdfcc0FE4297804b82F888DE8Fe": { "balance": "500000" }, "46eE6c1779eB3421Fc355132D867804894eFB1F9": { "balance": "300000" }, "4B3Beee7E6E067080f71336fF118E76E53C63cA3": { "balance": "200000" } } } 可以看这个官方教程来理解更多关于私有网络的搭建: Private network
`,description:"",tags:null,title:"构建以太坊网络",uri:"/blockchain/ethereum/networks/index.html"},{content:"",description:"",tags:null,title:"Blockchain",uri:"/tags/blockchain/index.html"},{content:"",description:"",tags:null,title:"Tags",uri:"/tags/index.html"},{content:"",description:"",tags:null,title:"Web3",uri:"/tags/web3/index.html"},{content:`区块链的基础设施是非常重要的，这为开发者使用区块链、开发应用等提供了基础的支持，可以大大节省时间和资源。
工具篇 TODO
基础设施篇 nodereal - Fastest, Reliable \u0026 Instant Web3 Infrastructure nodereal docs bnb dev tools - 里面包含了丰富的工具，值得拥有 quicknode - The Blockchain Development Platform, Learn. Build. Scale. wyre - INFRASTRUCTURE FOR THE NEW ECONOMY, We put the power in your hands with easy-to-use APIs that you can use to delight your users with simple and secure payments and digital asset experiences `,description:"",tags:["Blockchain","Web3"],title:"Web3 基础设施及工具",uri:"/blockchain/web3/infra/index.html"},{content:"",description:"",tags:null,title:"Backend Storage",uri:"/tags/backend-storage/index.html"},{content:"",description:"",tags:null,title:"Cache",uri:"/tags/cache/index.html"},{content:"",description:"",tags:null,title:"JVM",uri:"/tags/jvm/index.html"},{content:`JVM 是 Java 虚拟机的缩写，是运行 Java 字节码的虚拟机。
JVM 基础 Java 中的引用：强引用、软引用、弱引用、虚引用。
不同类型的引用和 GC 有密切的关系。
JVM 内存模型 TODO
JVM GC TODO
`,description:"",tags:["JVM"],title:"JVM",uri:"/programming-language/java/jvm/index.html"},{content:"",description:"",tags:null,title:"Middleware",uri:"/tags/middleware/index.html"},{content:`互联网服务中，缓存是提高系统性能的重要手段。缓存的设计需要考虑的因素很多，包括缓存的类型、缓存的位置、缓存的更新策略、缓存的一致性等等。本文将从这些方面来介绍缓存的设计。
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
References 缓存设计 进程内缓存，究竟怎么玩？ 美团-缓存那些事儿 深入分布式缓存：从原理到实践 Frameworks Caffeine Doc https://bbs.huaweicloud.com/blogs/365239 https://mp.weixin.qq.com/s/36kVm4pfiy2vQEMToZ9--g https://cloud.tencent.com/developer/article/1546995 https://juejin.cn/post/6844903961078530062 https://mp.weixin.qq.com/s/YBpOz1dQ0sG15vGL7N0PeQ https://shniu.gitbook.io/cs/middleware/redis https://shniu.gitbook.io/cs/system-design/backend-store/cache-design https://tech.meituan.com/2017/03/17/cache-about.html http://highscalability.com/blog/2016/1/25/design-of-a-modern-cache.html https://juejin.cn/post/7151937376578142216 https://juejin.cn/column/7140852038258147358
`,description:"",tags:["Backend Storage","Cache","Middleware"],title:"缓存设计",uri:"/distribute-service/backend-storage/cache/index.html"},{content:`大道至简，简则易行
学习不仅是为了找到答案，更是为了找到方法。 计算机科学领域的任何问题都可以通过增加一个间接的中间层来解决。 简单的设计是：设计者确定其设计已经达到了完美的标准不是不能再增加任何东西，而是不能再减少任何东西。 – 编程珠玑 程序员的主要问题与其说是技术问题，还不如说是心理问题，他不能解决问题，是因为他在企图解决错误问题，问题的最终解决， 是通过打破他的概念壁垒，进而去解决一个较简单的问题而实现的。 – 编程珠玑 如无必要，勿增实体。 – 奥卡姆剃刀原理 成为一名适应时代变化的软件工程师，知识体系的建设至关重要。
Quick Reference CS Blockchain Distribute Service Programming Language How to organize 指导思想是以计算机基础知识为底座，并结合人类在各方面留下的宝贵经验和真理，延伸到更多的应用领域，注重实战。
基础知识 操作系统原理 网络原理 计算机组成原理 软件工程 编程语言 设计模式 架构设计 代码质量 代码重构 代码审查 代码测试 代码部署 代码发布 代码监控 代码运维 中间件 数据库 缓存 消息队列 搜索引擎 分布式文件系统 分布式数据库 分布式缓存 分布式消息队列 分布式搜索引擎 分布式事务 分布式锁 分布式调度 分布式配置 分布式日志 分布式监控 分布式追踪 分布式链路 分布式存储 分布式计算 分布式任务 分布式协调 topic 行业 区块链 人工智能 云计算 `,description:"",tags:null,title:"Overview",uri:"/index.html"},{content:"",description:"",tags:null,title:"Categories",uri:"/categories/index.html"},{content:"",description:"",tags:null,title:"CS",uri:"/tags/cs/index.html"},{content:"",description:"",tags:null,title:"Distribute Service",uri:"/tags/distribute-service/index.html"},{content:"",description:"",tags:null,title:"Golang",uri:"/tags/golang/index.html"},{content:`Projects…
`,description:"",tags:null,title:"My Projects",uri:"/more/projects/index.html"}]