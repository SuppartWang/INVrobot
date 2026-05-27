const REPO_DATA = {
  software: {
    name: "软件",
    nameEn: "Software",
    desc: "跨产品复用的算法、仿真、中间件、驱动、SDK",
    descEn: "Reusable algorithms, simulation, middleware, drivers, SDKs across products",
    repos: [
      {
        name: "software-perception",
        title: "感知",
        titleEn: "Perception",
        desc: "视觉、点云、力觉、多模态融合、检测跟踪",
        descEn: "Vision, point cloud, force, multi-modal fusion, detection & tracking",
        modules: ["pointCloudProcessor","pointCloudRegister","pointCloudSegment","visionDetector","visionClassifier","visionDepthEstimator","objectTracker","multiObjectTracker","visualServoing","forceProcessor","tactileProcessor","multiModalFusion","graspQualityEstimator","sceneUnderstanding","anomalyDetector","featureExtractor","imageEnhancer","cameraModel"]
      },
      {
        name: "software-planning",
        title: "规划",
        titleEn: "Planning",
        desc: "运动、路径、任务、抓取、导航、探索",
        descEn: "Motion, path, task, grasp, navigation, exploration planning",
        modules: ["graspPlanner","motionPlanner","pathPlanner","taskPlanner","navigationPlanner","schedulingOptimizer","explorationPlanner","trajectoryOptimizer","collisionChecker"]
      },
      {
        name: "software-control",
        title: "控制",
        titleEn: "Control",
        desc: "伺服、力控、阻抗、导纳、柔顺、平衡",
        descEn: "Servo, force, impedance, admittance, compliance, balance control",
        modules: ["servoController","impedanceController","forceController","admittanceController","complianceController","balanceController","trajectoryTracker","vibrationSuppressor","collisionResponse"]
      },
      {
        name: "software-simulation",
        title: "仿真",
        titleEn: "Simulation",
        desc: "物理引擎、渲染、数字孪生、场景构建",
        descEn: "Physics engine, rendering, digital twin, scene building",
        modules: ["digitalTwin","digitalTwinRealTime","gazeboPlugin","gazeboWorld","isaacScene","mujocoModel","physicsEngine","pybulletEnvironment","rendererRayTracing"]
      },
      {
        name: "software-middleware",
        title: "中间件",
        titleEn: "Middleware",
        desc: "通信、调度、状态机、配置管理、数据总线",
        descEn: "Communication, scheduling, state machine, config management, data bus",
        modules: ["configManager","configManagerDynamic","databaseTimeSeries","ddsBridge","loggerDistributed","messageQueue","messageQueuePriority","ros2Node","rpcService","schedulerRealTime","stateMachine","stateMachineHierarchical"]
      },
      {
        name: "software-sdk",
        title: "SDK",
        titleEn: "SDK",
        desc: "API、示例、工具链、封装库",
        descEn: "API, examples, toolchain, wrapper libraries",
        modules: ["sdkCpp","sdkEmbedded","sdkPython","sdkRos2","sdkWeb"]
      },
      {
        name: "software-visualization",
        title: "可视化",
        titleEn: "Visualization",
        desc: "监控面板、调试工具、数字孪生展示、人机界面",
        descEn: "Monitoring panel, debug tools, digital twin display, HMI",
        modules: ["dashboardMonitor","debugPanel","debugPanelRealTime","foxgloveLayout","interfaceOperator","plotterSignal","rvizPanel","viewerDigitalTwin","webGui","webGuiOperator"]
      },
      {
        name: "software-algorithm",
        title: "算法",
        titleEn: "Algorithm",
        desc: "优化、学习、滤波、估计、标定、数学库",
        descEn: "Optimization, learning, filtering, estimation, calibration, math",
        modules: ["optimizerNonlinear","optimizerConvex","learnerReinforcement","learnerImitation","filterKalman","filterParticle","estimatorState","calibratorHandEye","calibratorCamera","mathGeometry","mathAlgebra","kinematicsForward","kinematicsInverse","dynamicsRigidBody","dynamicsFlexible"]
      },
      {
        name: "software-driver",
        title: "驱动",
        titleEn: "Driver",
        desc: "传感器驱动、板卡驱动、总线驱动",
        descEn: "Sensor drivers, board drivers, bus drivers",
        modules: ["cameraDriver","canDriver","ethercatDriver","forceDriver","gpioDriver","i2cDriver","imuDriver","lidarDriver","motorDriverInterface","serialDriver","spiDriver"]
      }
    ]
  },
  integration: {
    name: "集成",
    nameEn: "Integration",
    desc: "系统集成、部署、安全、通信、遥操作、标定、测试、监控",
    descEn: "System integration, deployment, safety, communication, teleoperation, calibration, test, monitoring",
    repos: [
      { name: "integration-deployment", title: "部署", titleEn: "Deployment", desc: "CI/CD、容器化、边缘部署、回滚", descEn: "CI/CD, containerization, edge deployment, rollback", modules: ["ansiblePlaybook","cloudDeployer","dockerCompose","edgeDeployer","imageBuilder","installScript","kubernetesHelm","rollbackScript","upgradeScript"] },
      { name: "integration-safety", title: "安全", titleEn: "Safety", desc: "功能安全、诊断、E-Stop、风险评估", descEn: "Functional safety, diagnostics, E-Stop, risk assessment", modules: ["diagnosticEngine","estopCircuit","faultInjector","functionalSafety","lockoutManager","riskAnalyzer","safetyMonitor"] },
      { name: "integration-calibration", title: "标定", titleEn: "Calibration", desc: "相机、手眼、力传感器、IMU 标定", descEn: "Camera, hand-eye, force sensor, IMU calibration", modules: ["calibratorWorkbench","cameraCalibrator","extrinsicCalibrator","forceCalibrator","handEyeCalibrator","imuCalibrator","intrinsicCalibrator","jointCalibrator"] },
      { name: "integration-monitor", title: "监控", titleEn: "Monitor", desc: "健康检查、告警、日志聚合、指标采集", descEn: "Health check, alerting, log aggregation, metrics collection", modules: ["alertManager","healthChecker","logAggregator","metricCollector","remoteDiagnostic","statusReporter","traceAnalyzer"] },
      { name: "integration-tool", title: "工具", titleEn: "Tool", desc: "格式转换、日志提取、代码生成、瓶颈分析", descEn: "Format conversion, log extraction, code generation, bottleneck analysis", modules: ["analyzerBottleneck","converterFormat","extractorLog","generatorCode","mergerConfig","simulatorNetwork"] },
      { name: "integration-pipeline", title: "流水线", titleEn: "Pipeline", desc: "构建、测试、发布、安全扫描、镜像同步", descEn: "Build, test, release, security scan, mirror sync", modules: ["buildPipeline","lintPipeline","mirrorSync","packageBundle","releasePipeline","scanSecurity","testPipeline"] },
      { name: "integration-test", title: "测试", titleEn: "Test", desc: "单元测试、集成测试、HIL/SIL/PIL、可靠性测试", descEn: "Unit test, integration test, HIL/SIL/PIL, reliability test", modules: ["benchmarkStandard","emcTest","environmentalTest","hardwareInLoop","integrationTest","performanceTest","processorInLoop","regressionTest","reliabilityTest","softwareInLoop","unitTest"] },
      { name: "integration-teleoperation", title: "遥操作", titleEn: "Teleoperation", desc: "主从控制、双边控制、触觉反馈、VR界面", descEn: "Master-slave control, bilateral control, haptic feedback, VR interface", modules: ["compensatorLatency","controllerBilateral","feedbackHaptic","interfaceVr","mappingDynamic","mappingKinematic","masterDevice","monitorQuality","predictorMotion","slaveDevice"] }
    ]
  },
  public: {
    name: "公开",
    nameEn: "Public",
    desc: "开源发布：工具、文档、示例、数据集、模型、源码",
    descEn: "Open source releases: tools, docs, examples, datasets, models, source code",
    repos: [
      { name: "public-tool", title: "工具", titleEn: "Tool", desc: "性能分析器、网格转换器、配置编辑器、点云查看器", descEn: "Performance analyzer, mesh converter, config editor, point cloud viewer", modules: ["analyzerLatency","converterMesh","editorConfig","simulatorPhysics","viewerPointCloud"] },
      { name: "public-document", title: "文档", titleEn: "Document", desc: "技术博客、实现笔记、论文配套、标准解读", descEn: "Technical blogs, implementation notes, paper companions, standard interpretations", modules: ["blogTechnical","noteImplementation","paperCompanion","standardInterpretation"] },
      { name: "public-example", title: "示例", titleEn: "Example", desc: "基准任务、基础演示、应用展示、项目模板", descEn: "Benchmark tasks, basic demos, application showcases, project templates", modules: ["benchmarkTask","demoBasic","showcaseApplication","templateProject","tutorialStarter"] },
      { name: "public-dataset", title: "数据集", titleEn: "Dataset", desc: "视觉、力觉、抓取、操作、导航、音频数据集", descEn: "Vision, force, grasp, manipulation, navigation, audio datasets", modules: ["datasetAudio","datasetForce","datasetGrasp","datasetManipulation","datasetNavigation","datasetVisual"] },
      { name: "public-model", title: "模型", titleEn: "Model", desc: "CAD模型、URDF、网格、网络检查点", descEn: "CAD models, URDF, meshes, network checkpoints", modules: ["cadGripper","cadJoint","checkpointNetwork","meshHighRes","meshLowRes","urdfArm","urdfHumanoid"] },
      { name: "public-source", title: "源码", titleEn: "Source", desc: "抓取算法、导航算法、开源驱动、ROS2接口", descEn: "Grasp algorithms, navigation algorithms, open source drivers, ROS2 interfaces", modules: ["algorithmGrasp","algorithmNavigation","driverOpenSource","interfaceRos2","toolConverter"] }
    ]
  },
  delivery: {
    name: "交付",
    nameEn: "Delivery",
    desc: "交付物：支持、培训、文档、SDK、安装包、系统镜像",
    descEn: "Deliverables: support, training, docs, SDK, packages, system images",
    repos: [
      { name: "delivery-support", title: "支持", titleEn: "Support", desc: "技术公告、FAQ、故障排查、更新通知", descEn: "Technical bulletins, FAQ, troubleshooting, update notices", modules: ["bulletinTechnical","faqGeneral","noticeUpdate","patchReleaseNote","troubleshootingGuide","workaroundTemporary"] },
      { name: "delivery-training", title: "培训", titleEn: "Training", desc: "基础课程、高级课程、实验练习、认证考试", descEn: "Basic courses, advanced courses, lab exercises, certification exams", modules: ["certificationExam","courseAdvanced","courseFundamental","exerciseSet","labExercise","workshopMaterial"] },
      { name: "delivery-documentation", title: "文档", titleEn: "Documentation", desc: "用户手册、快速入门、API参考、技术白皮书", descEn: "User manuals, quick start, API reference, technical whitepapers", modules: ["catalogProduct","guideQuickStart","manualUser","referenceApi","tutorialVideo","whitepaperTechnical"] },
      { name: "delivery-sdk", title: "SDK", titleEn: "SDK", desc: "C++/Python/ROS客户端SDK、嵌入式轻量SDK、Web接口", descEn: "C++/Python/ROS client SDKs, embedded lite SDK, web interface", modules: ["sdkClientCpp","sdkClientPython","sdkClientRos","sdkEmbeddedLite","sdkWebInterface"] },
      { name: "delivery-package", title: "安装包", titleEn: "Package", desc: "软件包、固件包、模型包、配置包、系统镜像", descEn: "Software packages, firmware packages, model packages, config packages, system images", modules: ["packageConfig","packageDataset","packageFirmware","packageModel","packageSoftwareBundle","packageSystemImage"] }
    ]
  },
  hardware: {
    name: "硬件",
    nameEn: "Hardware",
    desc: "硬件平台：机械、电气、固件、传感器、执行器、通信、电源、工具",
    descEn: "Hardware platform: mechanical, electrical, firmware, sensors, actuators, communication, power, tools",
    repos: [
      { name: "hardware-mechanical", title: "机械", titleEn: "Mechanical", desc: "轴承、联轴器、导轨、齿轮、谐波减速器、行星减速器", descEn: "Bearings, couplings, rails, gears, harmonic drives, planetary gearboxes", modules: ["bearingRotary","cameraMount","couplingFlexible","housingSealed","linkStructural","pulleyTiming","railLinear","sensorMount","shaftDrive","transmissionBelt","transmissionGear","transmissionHarmonic","transmissionPlanetary"] },
      { name: "hardware-electrical", title: "电气", titleEn: "Electrical", desc: "信号采集、通信桥接、关节/主控制器、电机驱动、配电", descEn: "Signal acquisition, communication bridge, joint/main controllers, motor drivers, power distribution", modules: ["acquisitionSignal","communicationBridge","controllerJoint","controllerMain","ledIndicator","motorDriver","motorDriverBrushless","motorDriverStepper","powerDistribution","protectionCircuit","relayModule"] },
      { name: "hardware-firmware", title: "固件", titleEn: "Firmware", desc: "Bootloader、BSP、HAL、MCU、FPGA、通信协议栈", descEn: "Bootloader, BSP, HAL, MCU, FPGA, communication protocol stacks", modules: ["bootloader","bootloaderFast","bsp","bspEsp32","bspStm32","fpgaControl","fpgaVision","hal","halRtos","mcuJoint","mcuMain","protocolCanOpen","protocolEtherCat","protocolStack"] },
      { name: "hardware-sensor", title: "传感器", titleEn: "Sensor", desc: "相机、编码器、力/力矩、IMU、LiDAR、麦克风、触觉", descEn: "Cameras, encoders, force/torque, IMU, LiDAR, microphones, tactile", modules: ["cameraDepth","cameraRgb","cameraThermal","encoderMagnetic","encoderOptical","forceTorque","forceTorqueMini","forceTorqueSixAxis","imuFiberOptic","imuMems","lidarMechanical","lidarSolidState","microphoneArray","tactileArray","tactileDistributed"] },
      { name: "hardware-actuator", title: "执行器", titleEn: "Actuator", desc: "伺服电机、步进电机、直线电机、液压/气动缸、人工肌肉", descEn: "Servo motors, stepper motors, linear motors, hydraulic/pneumatic cylinders, artificial muscles", modules: ["hydraulicCylinder","linearActuator","linearActuatorVoiceCoil","muscleArtificial","pneumaticCylinder","pneumaticMuscle","servoMotor","servoMotorFrameless","stepperMotor"] },
      { name: "hardware-power", title: "电源", titleEn: "Power", desc: "电池包、BMS、快充、DC-DC转换", descEn: "Battery packs, BMS, fast charging, DC-DC conversion", modules: ["batteryPack","bms","chargerFast","dcDc"] },
      { name: "hardware-communication", title: "通信", titleEn: "Communication", desc: "外部天线、协议网关", descEn: "External antennas, protocol gateways", modules: ["antennaExternal","gatewayProtocol"] },
      { name: "hardware-tool", title: "工具", titleEn: "Tool", desc: "测试夹具、装配治具、校准治具、电流探头", descEn: "Test fixtures, assembly jigs, calibration jigs, current probes", modules: ["fixtureTest","jigAssembly","jigCalibration","probeCurrent"] }
    ]
  },
  company: {
    name: "公司",
    nameEn: "Company",
    desc: "公司运营：文档、档案、政策、模板、规范、手册",
    descEn: "Company operations: docs, archives, policies, templates, specifications, handbooks",
    repos: [
      { name: "company-documentation", title: "文档", titleEn: "Documentation", desc: "术语表、文档中心、索引、Wiki", descEn: "Glossary, documentation hub, index, wiki", modules: ["glossary","hub","index","wiki"] },
      { name: "company-archive", title: "档案", titleEn: "Archive", desc: "成员档案、产品档案、项目档案", descEn: "Member archives, product archives, project archives", modules: ["member","product","project"] },
      { name: "company-policy", title: "政策", titleEn: "Policy", desc: "访问控制、保密协议、信息安全", descEn: "Access control, confidentiality, information security", modules: ["access","confidentiality","security"] },
      { name: "company-template", title: "模板", titleEn: "Template", desc: "文档模板、Issue模板、PR模板、报告模板", descEn: "Document templates, issue templates, PR templates, report templates", modules: ["document","issue","pr","report"] },
      { name: "company-specification", title: "规范", titleEn: "Specification", desc: "品牌规范、编码规范、图纸规范、接口规范、命名规范", descEn: "Brand specs, coding specs, drawing specs, interface specs, naming conventions", modules: ["brand","coding","drawing","interface","naming"] },
      { name: "company-handbook", title: "手册", titleEn: "Handbook", desc: "维护手册、入职手册、操作手册、安全手册", descEn: "Maintenance, onboarding, operation, safety handbooks", modules: ["maintenance","onboarding","operation","safety"] }
    ]
  },
  product: {
    name: "产品",
    nameEn: "Product",
    desc: "产品线：五指灵巧手、三指夹爪、特异型灵巧手、桶型布料裁切机、穿鞋带机、双臂机器人",
    descEn: "Product lines: five-finger dexterous hand, three-finger gripper, special dexterous hand, barrel fabric cutter, shoe lacing machine, dual-arm robot",
    repos: [
      { name: "product-fiveFingerDexterousHand", title: "五指灵巧手", titleEn: "Five-Finger Dexterous Hand", desc: "五指灵巧手产品资料", descEn: "Five-finger dexterous hand product materials", modules: ["mechanical","electrical","firmware","software","system","documentation","test"] },
      { name: "product-threeFingerGripper", title: "三指夹爪", titleEn: "Three-Finger Gripper", desc: "三指夹爪产品资料", descEn: "Three-finger gripper product materials", modules: ["mechanical","electrical","firmware","software","system","documentation","test"] },
      { name: "product-specialDexterousHand", title: "特异型灵巧手", titleEn: "Special Dexterous Hand", desc: "特异型灵巧手产品资料", descEn: "Special dexterous hand product materials", modules: ["mechanical","electrical","firmware","software","system","documentation","test"] },
      { name: "product-barrelFabricCutter", title: "桶型布料裁切机", titleEn: "Barrel Fabric Cutter", desc: "桶型布料裁切机产品资料", descEn: "Barrel fabric cutter product materials", modules: ["mechanical","electrical","firmware","software","system","documentation","test"] },
      { name: "product-shoeLacingMachine", title: "穿鞋带机", titleEn: "Shoe Lacing Machine", desc: "穿鞋带机产品资料", descEn: "Shoe lacing machine product materials", modules: ["mechanical","electrical","firmware","software","system","documentation","test"] },
      { name: "product-dualArmRobot", title: "双臂机器人", titleEn: "Dual-Arm Robot", desc: "双臂机器人产品资料", descEn: "Dual-arm robot product materials", modules: ["mechanical","electrical","firmware","software","system","documentation","test"] }
    ]
  }
};

const CATEGORIES = Object.keys(REPO_DATA);
