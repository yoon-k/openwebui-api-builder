const i18n = {
    en: {
        title: "AI API Builder", subtitle: "Design APIs, generate endpoints, create schemas", inputPanel: "INPUT", outputPanel: "OUTPUT",
        tabDesign: "Design", tabEndpoint: "Endpoint", tabSchema: "Schema", tabDocs: "Docs", tabChat: "Chat", tabHistory: "History",
        description: "Description", descPlaceholder: "Describe your API requirements...", apiStyle: "API Style", framework: "Framework",
        entities: "Entities", entitiesPlaceholder: "users, products, orders", features: "Features", featuresPlaceholder: "auth, pagination, filtering",
        design: "Design API", designing: "Designing...",
        resource: "Resource", method: "HTTP Method", endpointDesc: "Endpoint Description", endpointDescPlaceholder: "What should this endpoint do?",
        includeAuth: "Include Auth", includeValidation: "Include Validation", generate: "Generate", generating: "Generating...",
        schemaDesc: "Schema Description", schemaDescPlaceholder: "Describe your data model...", schemaFormat: "Format",
        apiSpec: "API Specification", apiSpecPlaceholder: "Paste API code or spec...", docFormat: "Documentation Format",
        includeExamples: "Include Examples", generateDocs: "Generate Docs",
        chatPlaceholder: "Ask about API development...", send: "Send",
        emptyTitle: "No Output Yet", emptyDesc: "Configure your input and generate",
        welcome: "Hi! I'm your API development assistant. I can help with:\n\n• REST/GraphQL API design\n• Endpoint code generation\n• Schema definitions\n• API documentation\n• Best practices",
        copyCode: "Copy", copied: "Copied!", downloadCode: "Download", clearHistory: "Clear History",
        presets: "Quick Presets", presetEcommerce: "E-commerce API", presetBlog: "Blog API", presetAuth: "Auth System",
        presetSocial: "Social Network", presetIoT: "IoT Platform", presetFinance: "Finance API",
        historyEmpty: "No history yet", historyItem: "Generated", deleteHistory: "Delete",
        testEndpoint: "Test Endpoint", testUrl: "URL", testMethod: "Method", testHeaders: "Headers (JSON)",
        testBody: "Request Body", runTest: "Run Test", testing: "Testing...", testResult: "Response",
        theme: "Theme", themeLight: "Light", themeDark: "Dark", themeSystem: "System",
        export: "Export", exportJson: "Export JSON", exportYaml: "Export YAML", exportPostman: "Export Postman",
        validationError: "Validation Error", required: "This field is required",
        apiVersion: "API Version", baseUrl: "Base URL", authType: "Authentication Type",
        noAuth: "No Auth", apiKey: "API Key", bearer: "Bearer Token", oauth2: "OAuth 2.0", basicAuth: "Basic Auth"
    },
    ko: {
        title: "AI API 빌더", subtitle: "API 설계, 엔드포인트 생성, 스키마 작성", inputPanel: "입력", outputPanel: "출력",
        tabDesign: "설계", tabEndpoint: "엔드포인트", tabSchema: "스키마", tabDocs: "문서", tabChat: "채팅", tabHistory: "기록",
        description: "설명", descPlaceholder: "API 요구사항을 설명하세요...", apiStyle: "API 스타일", framework: "프레임워크",
        entities: "엔티티", entitiesPlaceholder: "users, products, orders", features: "기능", featuresPlaceholder: "auth, pagination, filtering",
        design: "API 설계", designing: "설계 중...",
        resource: "리소스", method: "HTTP 메서드", endpointDesc: "엔드포인트 설명", endpointDescPlaceholder: "엔드포인트 기능을 설명하세요...",
        includeAuth: "인증 포함", includeValidation: "유효성 검사 포함", generate: "생성", generating: "생성 중...",
        schemaDesc: "스키마 설명", schemaDescPlaceholder: "데이터 모델을 설명하세요...", schemaFormat: "형식",
        apiSpec: "API 스펙", apiSpecPlaceholder: "API 코드나 스펙을 붙여넣으세요...", docFormat: "문서 형식",
        includeExamples: "예시 포함", generateDocs: "문서 생성",
        chatPlaceholder: "API 개발에 대해 질문하세요...", send: "전송",
        emptyTitle: "출력 없음", emptyDesc: "입력을 구성하고 생성하세요",
        welcome: "안녕하세요! API 개발 도우미입니다:\n\n• REST/GraphQL API 설계\n• 엔드포인트 코드 생성\n• 스키마 정의\n• API 문서화\n• 모범 사례",
        copyCode: "복사", copied: "복사됨!", downloadCode: "다운로드", clearHistory: "기록 삭제",
        presets: "빠른 프리셋", presetEcommerce: "이커머스 API", presetBlog: "블로그 API", presetAuth: "인증 시스템",
        presetSocial: "소셜 네트워크", presetIoT: "IoT 플랫폼", presetFinance: "금융 API",
        historyEmpty: "기록이 없습니다", historyItem: "생성됨", deleteHistory: "삭제",
        testEndpoint: "엔드포인트 테스트", testUrl: "URL", testMethod: "메서드", testHeaders: "헤더 (JSON)",
        testBody: "요청 본문", runTest: "테스트 실행", testing: "테스트 중...", testResult: "응답",
        theme: "테마", themeLight: "라이트", themeDark: "다크", themeSystem: "시스템",
        export: "내보내기", exportJson: "JSON 내보내기", exportYaml: "YAML 내보내기", exportPostman: "Postman 내보내기",
        validationError: "유효성 검사 오류", required: "이 필드는 필수입니다",
        apiVersion: "API 버전", baseUrl: "기본 URL", authType: "인증 유형",
        noAuth: "인증 없음", apiKey: "API 키", bearer: "Bearer 토큰", oauth2: "OAuth 2.0", basicAuth: "기본 인증"
    },
    ja: {
        title: "AI APIビルダー", subtitle: "API設計、エンドポイント生成、スキーマ作成", inputPanel: "入力", outputPanel: "出力",
        tabDesign: "設計", tabEndpoint: "エンドポイント", tabSchema: "スキーマ", tabDocs: "ドキュメント", tabChat: "チャット", tabHistory: "履歴",
        description: "説明", descPlaceholder: "API要件を説明...", apiStyle: "APIスタイル", framework: "フレームワーク",
        entities: "エンティティ", entitiesPlaceholder: "users, products, orders", features: "機能", featuresPlaceholder: "auth, pagination, filtering",
        design: "API設計", designing: "設計中...",
        resource: "リソース", method: "HTTPメソッド", endpointDesc: "エンドポイント説明", endpointDescPlaceholder: "エンドポイントの機能を説明...",
        includeAuth: "認証を含む", includeValidation: "バリデーションを含む", generate: "生成", generating: "生成中...",
        schemaDesc: "スキーマ説明", schemaDescPlaceholder: "データモデルを説明...", schemaFormat: "形式",
        apiSpec: "API仕様", apiSpecPlaceholder: "APIコードや仕様を貼り付け...", docFormat: "ドキュメント形式",
        includeExamples: "例を含む", generateDocs: "ドキュメント生成",
        chatPlaceholder: "API開発について質問...", send: "送信",
        emptyTitle: "出力なし", emptyDesc: "入力を設定して生成",
        welcome: "こんにちは！API開発アシスタントです:\n\n• REST/GraphQL API設計\n• エンドポイントコード生成\n• スキーマ定義\n• APIドキュメント\n• ベストプラクティス",
        copyCode: "コピー", copied: "コピー完了!", downloadCode: "ダウンロード", clearHistory: "履歴を削除",
        presets: "クイックプリセット", presetEcommerce: "Eコマース API", presetBlog: "ブログ API", presetAuth: "認証システム",
        presetSocial: "ソーシャルネットワーク", presetIoT: "IoTプラットフォーム", presetFinance: "金融 API",
        historyEmpty: "履歴がありません", historyItem: "生成済み", deleteHistory: "削除",
        testEndpoint: "エンドポイントテスト", testUrl: "URL", testMethod: "メソッド", testHeaders: "ヘッダー (JSON)",
        testBody: "リクエストボディ", runTest: "テスト実行", testing: "テスト中...", testResult: "レスポンス",
        theme: "テーマ", themeLight: "ライト", themeDark: "ダーク", themeSystem: "システム",
        export: "エクスポート", exportJson: "JSONエクスポート", exportYaml: "YAMLエクスポート", exportPostman: "Postmanエクスポート",
        validationError: "バリデーションエラー", required: "この項目は必須です",
        apiVersion: "APIバージョン", baseUrl: "ベースURL", authType: "認証タイプ",
        noAuth: "認証なし", apiKey: "APIキー", bearer: "Bearerトークン", oauth2: "OAuth 2.0", basicAuth: "Basic認証"
    },
    zh: {
        title: "AI API 构建器", subtitle: "设计API、生成端点、创建模式", inputPanel: "输入", outputPanel: "输出",
        tabDesign: "设计", tabEndpoint: "端点", tabSchema: "模式", tabDocs: "文档", tabChat: "聊天", tabHistory: "历史",
        description: "描述", descPlaceholder: "描述您的API需求...", apiStyle: "API风格", framework: "框架",
        entities: "实体", entitiesPlaceholder: "users, products, orders", features: "功能", featuresPlaceholder: "auth, pagination, filtering",
        design: "设计API", designing: "设计中...",
        resource: "资源", method: "HTTP方法", endpointDesc: "端点描述", endpointDescPlaceholder: "描述端点功能...",
        includeAuth: "包含认证", includeValidation: "包含验证", generate: "生成", generating: "生成中...",
        schemaDesc: "模式描述", schemaDescPlaceholder: "描述数据模型...", schemaFormat: "格式",
        apiSpec: "API规范", apiSpecPlaceholder: "粘贴API代码或规范...", docFormat: "文档格式",
        includeExamples: "包含示例", generateDocs: "生成文档",
        chatPlaceholder: "询问API开发问题...", send: "发送",
        emptyTitle: "暂无输出", emptyDesc: "配置输入并生成",
        welcome: "您好！我是API开发助手：\n\n• REST/GraphQL API设计\n• 端点代码生成\n• 模式定义\n• API文档\n• 最佳实践",
        copyCode: "复制", copied: "已复制!", downloadCode: "下载", clearHistory: "清除历史",
        presets: "快速预设", presetEcommerce: "电商API", presetBlog: "博客API", presetAuth: "认证系统",
        presetSocial: "社交网络", presetIoT: "物联网平台", presetFinance: "金融API",
        historyEmpty: "暂无历史", historyItem: "已生成", deleteHistory: "删除",
        testEndpoint: "测试端点", testUrl: "URL", testMethod: "方法", testHeaders: "请求头 (JSON)",
        testBody: "请求体", runTest: "运行测试", testing: "测试中...", testResult: "响应",
        theme: "主题", themeLight: "浅色", themeDark: "深色", themeSystem: "系统",
        export: "导出", exportJson: "导出JSON", exportYaml: "导出YAML", exportPostman: "导出Postman",
        validationError: "验证错误", required: "此字段为必填项",
        apiVersion: "API版本", baseUrl: "基础URL", authType: "认证类型",
        noAuth: "无认证", apiKey: "API密钥", bearer: "Bearer令牌", oauth2: "OAuth 2.0", basicAuth: "基本认证"
    },
    es: {
        title: "Constructor de API con IA", subtitle: "Diseña APIs, genera endpoints, crea esquemas", inputPanel: "ENTRADA", outputPanel: "SALIDA",
        tabDesign: "Diseño", tabEndpoint: "Endpoint", tabSchema: "Esquema", tabDocs: "Docs", tabChat: "Chat", tabHistory: "Historial",
        description: "Descripción", descPlaceholder: "Describe los requisitos de tu API...", apiStyle: "Estilo de API", framework: "Framework",
        entities: "Entidades", entitiesPlaceholder: "users, products, orders", features: "Características", featuresPlaceholder: "auth, pagination, filtering",
        design: "Diseñar API", designing: "Diseñando...",
        resource: "Recurso", method: "Método HTTP", endpointDesc: "Descripción del Endpoint", endpointDescPlaceholder: "¿Qué debe hacer este endpoint?",
        includeAuth: "Incluir Auth", includeValidation: "Incluir Validación", generate: "Generar", generating: "Generando...",
        schemaDesc: "Descripción del Esquema", schemaDescPlaceholder: "Describe tu modelo de datos...", schemaFormat: "Formato",
        apiSpec: "Especificación de API", apiSpecPlaceholder: "Pega código o especificación de API...", docFormat: "Formato de Documentación",
        includeExamples: "Incluir Ejemplos", generateDocs: "Generar Docs",
        chatPlaceholder: "Pregunta sobre desarrollo de API...", send: "Enviar",
        emptyTitle: "Sin Salida Aún", emptyDesc: "Configura tu entrada y genera",
        welcome: "¡Hola! Soy tu asistente de desarrollo de API:\n\n• Diseño de API REST/GraphQL\n• Generación de código de endpoint\n• Definiciones de esquema\n• Documentación de API\n• Mejores prácticas",
        copyCode: "Copiar", copied: "¡Copiado!", downloadCode: "Descargar", clearHistory: "Borrar Historial",
        presets: "Presets Rápidos", presetEcommerce: "API E-commerce", presetBlog: "API Blog", presetAuth: "Sistema Auth",
        presetSocial: "Red Social", presetIoT: "Plataforma IoT", presetFinance: "API Finanzas",
        historyEmpty: "Sin historial", historyItem: "Generado", deleteHistory: "Eliminar",
        testEndpoint: "Probar Endpoint", testUrl: "URL", testMethod: "Método", testHeaders: "Headers (JSON)",
        testBody: "Cuerpo de Solicitud", runTest: "Ejecutar Prueba", testing: "Probando...", testResult: "Respuesta",
        theme: "Tema", themeLight: "Claro", themeDark: "Oscuro", themeSystem: "Sistema",
        export: "Exportar", exportJson: "Exportar JSON", exportYaml: "Exportar YAML", exportPostman: "Exportar Postman",
        validationError: "Error de Validación", required: "Este campo es obligatorio",
        apiVersion: "Versión de API", baseUrl: "URL Base", authType: "Tipo de Autenticación",
        noAuth: "Sin Auth", apiKey: "API Key", bearer: "Token Bearer", oauth2: "OAuth 2.0", basicAuth: "Auth Básica"
    },
    fr: {
        title: "Constructeur d'API IA", subtitle: "Concevoir des APIs, générer des endpoints, créer des schémas", inputPanel: "ENTRÉE", outputPanel: "SORTIE",
        tabDesign: "Conception", tabEndpoint: "Endpoint", tabSchema: "Schéma", tabDocs: "Docs", tabChat: "Chat", tabHistory: "Historique",
        description: "Description", descPlaceholder: "Décrivez vos exigences API...", apiStyle: "Style d'API", framework: "Framework",
        entities: "Entités", entitiesPlaceholder: "users, products, orders", features: "Fonctionnalités", featuresPlaceholder: "auth, pagination, filtering",
        design: "Concevoir l'API", designing: "Conception...",
        resource: "Ressource", method: "Méthode HTTP", endpointDesc: "Description de l'Endpoint", endpointDescPlaceholder: "Que doit faire cet endpoint?",
        includeAuth: "Inclure Auth", includeValidation: "Inclure Validation", generate: "Générer", generating: "Génération...",
        schemaDesc: "Description du Schéma", schemaDescPlaceholder: "Décrivez votre modèle de données...", schemaFormat: "Format",
        apiSpec: "Spécification API", apiSpecPlaceholder: "Collez le code ou spec API...", docFormat: "Format de Documentation",
        includeExamples: "Inclure Exemples", generateDocs: "Générer Docs",
        chatPlaceholder: "Posez des questions sur le développement API...", send: "Envoyer",
        emptyTitle: "Pas de Sortie", emptyDesc: "Configurez votre entrée et générez",
        welcome: "Bonjour! Je suis votre assistant de développement API:\n\n• Conception d'API REST/GraphQL\n• Génération de code endpoint\n• Définitions de schéma\n• Documentation API\n• Meilleures pratiques",
        copyCode: "Copier", copied: "Copié!", downloadCode: "Télécharger", clearHistory: "Effacer l'Historique",
        presets: "Presets Rapides", presetEcommerce: "API E-commerce", presetBlog: "API Blog", presetAuth: "Système Auth",
        presetSocial: "Réseau Social", presetIoT: "Plateforme IoT", presetFinance: "API Finance",
        historyEmpty: "Pas d'historique", historyItem: "Généré", deleteHistory: "Supprimer",
        testEndpoint: "Tester Endpoint", testUrl: "URL", testMethod: "Méthode", testHeaders: "En-têtes (JSON)",
        testBody: "Corps de Requête", runTest: "Exécuter Test", testing: "Test...", testResult: "Réponse",
        theme: "Thème", themeLight: "Clair", themeDark: "Sombre", themeSystem: "Système",
        export: "Exporter", exportJson: "Exporter JSON", exportYaml: "Exporter YAML", exportPostman: "Exporter Postman",
        validationError: "Erreur de Validation", required: "Ce champ est obligatoire",
        apiVersion: "Version API", baseUrl: "URL de Base", authType: "Type d'Authentification",
        noAuth: "Sans Auth", apiKey: "Clé API", bearer: "Token Bearer", oauth2: "OAuth 2.0", basicAuth: "Auth Basique"
    },
    de: {
        title: "AI API-Builder", subtitle: "APIs entwerfen, Endpoints generieren, Schemas erstellen", inputPanel: "EINGABE", outputPanel: "AUSGABE",
        tabDesign: "Design", tabEndpoint: "Endpoint", tabSchema: "Schema", tabDocs: "Doku", tabChat: "Chat", tabHistory: "Verlauf",
        description: "Beschreibung", descPlaceholder: "Beschreiben Sie Ihre API-Anforderungen...", apiStyle: "API-Stil", framework: "Framework",
        entities: "Entitäten", entitiesPlaceholder: "users, products, orders", features: "Features", featuresPlaceholder: "auth, pagination, filtering",
        design: "API Entwerfen", designing: "Entwerfe...",
        resource: "Ressource", method: "HTTP-Methode", endpointDesc: "Endpoint-Beschreibung", endpointDescPlaceholder: "Was soll dieser Endpoint tun?",
        includeAuth: "Auth Einschließen", includeValidation: "Validierung Einschließen", generate: "Generieren", generating: "Generiere...",
        schemaDesc: "Schema-Beschreibung", schemaDescPlaceholder: "Beschreiben Sie Ihr Datenmodell...", schemaFormat: "Format",
        apiSpec: "API-Spezifikation", apiSpecPlaceholder: "API-Code oder Spezifikation einfügen...", docFormat: "Dokumentationsformat",
        includeExamples: "Beispiele Einschließen", generateDocs: "Doku Generieren",
        chatPlaceholder: "Fragen zur API-Entwicklung...", send: "Senden",
        emptyTitle: "Keine Ausgabe", emptyDesc: "Konfigurieren Sie Ihre Eingabe und generieren Sie",
        welcome: "Hallo! Ich bin Ihr API-Entwicklungsassistent:\n\n• REST/GraphQL API-Design\n• Endpoint-Code-Generierung\n• Schema-Definitionen\n• API-Dokumentation\n• Best Practices",
        copyCode: "Kopieren", copied: "Kopiert!", downloadCode: "Herunterladen", clearHistory: "Verlauf Löschen",
        presets: "Schnell-Presets", presetEcommerce: "E-Commerce API", presetBlog: "Blog API", presetAuth: "Auth-System",
        presetSocial: "Soziales Netzwerk", presetIoT: "IoT-Plattform", presetFinance: "Finanz-API",
        historyEmpty: "Kein Verlauf", historyItem: "Generiert", deleteHistory: "Löschen",
        testEndpoint: "Endpoint Testen", testUrl: "URL", testMethod: "Methode", testHeaders: "Headers (JSON)",
        testBody: "Request-Body", runTest: "Test Ausführen", testing: "Teste...", testResult: "Antwort",
        theme: "Thema", themeLight: "Hell", themeDark: "Dunkel", themeSystem: "System",
        export: "Exportieren", exportJson: "JSON Exportieren", exportYaml: "YAML Exportieren", exportPostman: "Postman Exportieren",
        validationError: "Validierungsfehler", required: "Dieses Feld ist erforderlich",
        apiVersion: "API-Version", baseUrl: "Basis-URL", authType: "Authentifizierungstyp",
        noAuth: "Keine Auth", apiKey: "API-Schlüssel", bearer: "Bearer-Token", oauth2: "OAuth 2.0", basicAuth: "Basic Auth"
    }
};

const presets = {
    ecommerce: {
        description: { en: "E-commerce platform API with product catalog, shopping cart, orders, payments, and user management", ko: "상품 카탈로그, 장바구니, 주문, 결제, 사용자 관리를 포함한 이커머스 플랫폼 API", ja: "商品カタログ、ショッピングカート、注文、決済、ユーザー管理を含むEコマースプラットフォームAPI", zh: "包含产品目录、购物车、订单、支付和用户管理的电商平台API", es: "API de plataforma e-commerce con catálogo de productos, carrito, pedidos, pagos y gestión de usuarios", fr: "API de plateforme e-commerce avec catalogue produits, panier, commandes, paiements et gestion utilisateurs", de: "E-Commerce-Plattform-API mit Produktkatalog, Warenkorb, Bestellungen, Zahlungen und Benutzerverwaltung" },
        entities: "users, products, categories, cart, orders, payments, reviews",
        features: "auth, pagination, filtering, search, sorting, caching"
    },
    blog: {
        description: { en: "Blog platform API with posts, comments, categories, tags, and user authentication", ko: "게시글, 댓글, 카테고리, 태그, 사용자 인증을 포함한 블로그 플랫폼 API", ja: "投稿、コメント、カテゴリ、タグ、ユーザー認証を含むブログプラットフォームAPI", zh: "包含文章、评论、分类、标签和用户认证的博客平台API", es: "API de plataforma de blog con posts, comentarios, categorías, tags y autenticación de usuarios", fr: "API de plateforme blog avec articles, commentaires, catégories, tags et authentification", de: "Blog-Plattform-API mit Posts, Kommentaren, Kategorien, Tags und Benutzerauthentifizierung" },
        entities: "users, posts, comments, categories, tags, likes",
        features: "auth, pagination, markdown, search, draft"
    },
    auth: {
        description: { en: "Complete authentication system with JWT, OAuth, MFA, password reset, and session management", ko: "JWT, OAuth, MFA, 비밀번호 재설정, 세션 관리를 포함한 완전한 인증 시스템", ja: "JWT、OAuth、MFA、パスワードリセット、セッション管理を含む完全な認証システム", zh: "包含JWT、OAuth、MFA、密码重置和会话管理的完整认证系统", es: "Sistema de autenticación completo con JWT, OAuth, MFA, restablecimiento de contraseña y gestión de sesiones", fr: "Système d'authentification complet avec JWT, OAuth, MFA, réinitialisation de mot de passe et gestion de sessions", de: "Komplettes Authentifizierungssystem mit JWT, OAuth, MFA, Passwort-Reset und Session-Management" },
        entities: "users, sessions, tokens, roles, permissions",
        features: "jwt, oauth2, mfa, rate-limiting, audit-log"
    },
    social: {
        description: { en: "Social network API with profiles, posts, followers, messaging, and notifications", ko: "프로필, 게시글, 팔로워, 메시징, 알림을 포함한 소셜 네트워크 API", ja: "プロフィール、投稿、フォロワー、メッセージング、通知を含むソーシャルネットワークAPI", zh: "包含个人资料、帖子、关注者、消息和通知的社交网络API", es: "API de red social con perfiles, publicaciones, seguidores, mensajería y notificaciones", fr: "API de réseau social avec profils, publications, abonnés, messagerie et notifications", de: "Soziales Netzwerk API mit Profilen, Posts, Followern, Messaging und Benachrichtigungen" },
        entities: "users, posts, comments, likes, followers, messages, notifications",
        features: "auth, real-time, pagination, media-upload, search"
    },
    iot: {
        description: { en: "IoT platform API for device management, telemetry data, alerts, and firmware updates", ko: "디바이스 관리, 텔레메트리 데이터, 알림, 펌웨어 업데이트를 위한 IoT 플랫폼 API", ja: "デバイス管理、テレメトリデータ、アラート、ファームウェアアップデートのためのIoTプラットフォームAPI", zh: "用于设备管理、遥测数据、告警和固件更新的物联网平台API", es: "API de plataforma IoT para gestión de dispositivos, datos de telemetría, alertas y actualizaciones de firmware", fr: "API de plateforme IoT pour la gestion des appareils, données de télémétrie, alertes et mises à jour firmware", de: "IoT-Plattform-API für Geräteverwaltung, Telemetriedaten, Warnungen und Firmware-Updates" },
        entities: "devices, sensors, telemetry, alerts, firmware, users",
        features: "auth, mqtt, websocket, time-series, batch-upload"
    },
    finance: {
        description: { en: "Financial API with accounts, transactions, transfers, budgets, and analytics", ko: "계좌, 거래, 이체, 예산, 분석을 포함한 금융 API", ja: "口座、取引、送金、予算、分析を含む金融API", zh: "包含账户、交易、转账、预算和分析的金融API", es: "API financiera con cuentas, transacciones, transferencias, presupuestos y analíticas", fr: "API financière avec comptes, transactions, transferts, budgets et analytiques", de: "Finanz-API mit Konten, Transaktionen, Überweisungen, Budgets und Analysen" },
        entities: "users, accounts, transactions, transfers, budgets, categories",
        features: "auth, encryption, audit-log, rate-limiting, 2fa"
    }
};

let currentLang = localStorage.getItem('apiBuilderLang') || 'en';
let currentTab = 'design';
let chatHistory = [];
let generationHistory = JSON.parse(localStorage.getItem('apiBuilderHistory') || '[]');
let currentTheme = localStorage.getItem('apiBuilderTheme') || 'dark';
let lastGeneratedOutput = null;

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    setLanguage(currentLang);
    addWelcomeMessage();
});

function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('apiBuilderTheme', theme);

    if (theme === 'system') {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-theme', theme);

    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.theme === currentTheme));
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('apiBuilderLang', lang);
    const t = i18n[lang];
    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('inputPanelTitle').textContent = t.inputPanel;
    document.getElementById('outputPanelTitle').textContent = t.outputPanel;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    updateTabs();
    updateForm();
}

function updateTabs() {
    const t = i18n[currentLang];
    document.getElementById('tabDesign').textContent = t.tabDesign;
    document.getElementById('tabEndpoint').textContent = t.tabEndpoint;
    document.getElementById('tabSchema').textContent = t.tabSchema;
    document.getElementById('tabDocs').textContent = t.tabDocs;
    document.getElementById('tabChat').textContent = t.tabChat;
    document.getElementById('tabHistory').textContent = t.tabHistory;
}

function showTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    updateForm();
}

function updateForm() {
    const t = i18n[currentLang];
    const form = document.getElementById('formContainer');
    const frameworks = ['fastapi', 'flask', 'express', 'django', 'spring', 'nestjs', 'gin', 'rails', 'actix', 'phoenix'];
    const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
    const schemaFormats = ['openapi', 'jsonschema', 'graphql', 'protobuf', 'asyncapi'];
    const docFormats = ['markdown', 'openapi', 'swagger', 'redoc', 'slate'];

    if (currentTab === 'design') {
        form.innerHTML = `
            <div class="presets-section">
                <label class="form-label">${t.presets}</label>
                <div class="preset-chips">
                    <span class="preset-chip" onclick="applyPreset('ecommerce')">🛒 ${t.presetEcommerce}</span>
                    <span class="preset-chip" onclick="applyPreset('blog')">📝 ${t.presetBlog}</span>
                    <span class="preset-chip" onclick="applyPreset('auth')">🔐 ${t.presetAuth}</span>
                    <span class="preset-chip" onclick="applyPreset('social')">👥 ${t.presetSocial}</span>
                    <span class="preset-chip" onclick="applyPreset('iot')">📡 ${t.presetIoT}</span>
                    <span class="preset-chip" onclick="applyPreset('finance')">💰 ${t.presetFinance}</span>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">${t.description} <span class="required">*</span></label>
                <textarea id="descInput" class="form-textarea" rows="3" placeholder="${t.descPlaceholder}" required></textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">${t.apiStyle}</label>
                    <div class="chips">
                        <span class="chip active" data-value="rest" onclick="selectChip(this, 'style')">REST</span>
                        <span class="chip" data-value="graphql" onclick="selectChip(this, 'style')">GraphQL</span>
                        <span class="chip" data-value="grpc" onclick="selectChip(this, 'style')">gRPC</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">${t.framework}</label>
                    <select id="frameworkSelect" class="form-select">
                        ${frameworks.map(f => `<option value="${f}">${f.charAt(0).toUpperCase() + f.slice(1)}</option>`).join('')}
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">${t.entities}</label>
                <input type="text" id="entitiesInput" class="form-input" placeholder="${t.entitiesPlaceholder}">
            </div>
            <div class="form-group">
                <label class="form-label">${t.features}</label>
                <input type="text" id="featuresInput" class="form-input" placeholder="${t.featuresPlaceholder}">
            </div>
            <button id="designBtn" class="btn btn-primary btn-full" onclick="designAPI()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                ${t.design}
            </button>`;
    } else if (currentTab === 'endpoint') {
        form.innerHTML = `
            <div class="form-group">
                <label class="form-label">${t.resource} <span class="required">*</span></label>
                <input type="text" id="resourceInput" class="form-input" placeholder="e.g., users, products" required>
            </div>
            <div class="form-group">
                <label class="form-label">${t.method}</label>
                <div class="chips">
                    ${methods.map((m, i) => `<span class="chip method-chip-${m} ${i === 0 ? 'active' : ''}" data-value="${m}" onclick="selectChip(this, 'method')">${m}</span>`).join('')}
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">${t.framework}</label>
                <select id="epFrameworkSelect" class="form-select">
                    ${frameworks.map(f => `<option value="${f}">${f.charAt(0).toUpperCase() + f.slice(1)}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">${t.endpointDesc}</label>
                <textarea id="epDescInput" class="form-textarea" rows="2" placeholder="${t.endpointDescPlaceholder}"></textarea>
            </div>
            <div class="form-group checkbox-group">
                <label class="checkbox-label"><input type="checkbox" id="authCheck" checked> ${t.includeAuth}</label>
                <label class="checkbox-label"><input type="checkbox" id="validationCheck" checked> ${t.includeValidation}</label>
            </div>
            <button id="endpointBtn" class="btn btn-primary btn-full" onclick="generateEndpoint()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                ${t.generate}
            </button>`;
    } else if (currentTab === 'schema') {
        form.innerHTML = `
            <div class="form-group">
                <label class="form-label">${t.schemaDesc} <span class="required">*</span></label>
                <textarea id="schemaDescInput" class="form-textarea" rows="4" placeholder="${t.schemaDescPlaceholder}" required></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">${t.schemaFormat}</label>
                <div class="chips">
                    ${schemaFormats.map((f, i) => `<span class="chip ${i === 0 ? 'active' : ''}" data-value="${f}" onclick="selectChip(this, 'schemaFormat')">${f.toUpperCase()}</span>`).join('')}
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">${t.entities}</label>
                <input type="text" id="schemaEntitiesInput" class="form-input" placeholder="${t.entitiesPlaceholder}">
            </div>
            <button id="schemaBtn" class="btn btn-primary btn-full" onclick="generateSchema()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                ${t.generate}
            </button>`;
    } else if (currentTab === 'docs') {
        form.innerHTML = `
            <div class="form-group">
                <label class="form-label">${t.apiSpec} <span class="required">*</span></label>
                <textarea id="apiSpecInput" class="form-textarea code-input" rows="8" placeholder="${t.apiSpecPlaceholder}" required></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">${t.docFormat}</label>
                <div class="chips">
                    ${docFormats.map((f, i) => `<span class="chip ${i === 0 ? 'active' : ''}" data-value="${f}" onclick="selectChip(this, 'docFormat')">${f.charAt(0).toUpperCase() + f.slice(1)}</span>`).join('')}
                </div>
            </div>
            <div class="form-group">
                <label class="checkbox-label"><input type="checkbox" id="examplesCheck" checked> ${t.includeExamples}</label>
            </div>
            <button id="docsBtn" class="btn btn-primary btn-full" onclick="generateDocs()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                ${t.generateDocs}
            </button>`;
    } else if (currentTab === 'chat') {
        form.innerHTML = `
            <div id="chatMessages" class="chat-messages"></div>
            <div class="chat-input-container">
                <input type="text" id="chatInput" class="form-input" placeholder="${t.chatPlaceholder}" onkeypress="if(event.key==='Enter')sendMessage()">
                <button class="btn btn-primary" onclick="sendMessage()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    ${t.send}
                </button>
            </div>`;
        renderChatMessages();
    } else if (currentTab === 'history') {
        renderHistoryTab();
    }
}

function applyPreset(presetName) {
    const preset = presets[presetName];
    if (!preset) return;

    document.getElementById('descInput').value = preset.description[currentLang] || preset.description.en;
    document.getElementById('entitiesInput').value = preset.entities;
    document.getElementById('featuresInput').value = preset.features;

    showNotification(i18n[currentLang].presets + ' applied!', 'success');
}

function selectChip(el, group) {
    el.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

function getChipValue(container) {
    return container?.querySelector('.chip.active')?.dataset.value;
}

async function designAPI() {
    const t = i18n[currentLang];
    const btn = document.getElementById('designBtn');
    const output = document.getElementById('outputContainer');
    const descInput = document.getElementById('descInput');

    if (!descInput.value.trim()) {
        showNotification(t.validationError + ': ' + t.required, 'error');
        descInput.focus();
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="btn-spinner"></span>${t.designing}`;
    output.innerHTML = `<div class="loading"><div class="spinner"></div><span>${t.designing}</span></div>`;

    try {
        const styleChips = document.querySelector('.form-group:nth-child(2) .chips');
        const requestData = {
            description: descInput.value,
            api_style: getChipValue(styleChips) || 'rest',
            framework: document.getElementById('frameworkSelect').value,
            entities: document.getElementById('entitiesInput').value.split(',').map(e => e.trim()).filter(e => e),
            features: document.getElementById('featuresInput').value.split(',').map(f => f.trim()).filter(f => f),
            language: currentLang
        };

        const res = await fetch('/api/design', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        lastGeneratedOutput = { type: 'design', data, request: requestData };
        addToHistory('design', requestData.description, data);
        renderAPIDesign(data);
    } catch (e) {
        output.innerHTML = `<div class="error-state"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><h3>Error</h3><p>${e.message}</p></div>`;
    }

    btn.disabled = false;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>${t.design}`;
}

function renderAPIDesign(data) {
    const t = i18n[currentLang];
    const output = document.getElementById('outputContainer');

    if (data.endpoints) {
        output.innerHTML = `
            <div class="output-header">
                <h3>${data.api_name || 'API Design'}</h3>
                <div class="output-actions">
                    <button class="btn btn-sm" onclick="copyOutput()">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        ${t.copyCode}
                    </button>
                    <button class="btn btn-sm" onclick="downloadOutput('json')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        ${t.downloadCode}
                    </button>
                </div>
            </div>
            <p class="api-description">${data.description || ''}</p>
            ${data.base_url ? `<div class="api-meta"><span class="meta-label">Base URL:</span> <code>${data.base_url}</code></div>` : ''}
            ${data.version ? `<div class="api-meta"><span class="meta-label">Version:</span> <code>${data.version}</code></div>` : ''}
            ${data.auth_scheme ? `<div class="api-meta"><span class="meta-label">Auth:</span> <code>${data.auth_scheme}</code></div>` : ''}

            <div class="section-header">
                <h4>Endpoints</h4>
                <span class="badge">${data.endpoints.length}</span>
            </div>
            <div class="endpoints-list">
                ${data.endpoints.map(ep => `
                    <div class="endpoint-item">
                        <div class="endpoint-header">
                            <span class="method-badge method-${ep.method}">${ep.method}</span>
                            <code class="endpoint-path">${ep.path}</code>
                            ${ep.auth_required ? '<span class="auth-badge">🔐</span>' : ''}
                        </div>
                        <p class="endpoint-desc">${ep.description}</p>
                        ${ep.request_body && Object.keys(ep.request_body).length > 0 ? `<details class="endpoint-details"><summary>Request Body</summary><pre class="code-block">${JSON.stringify(ep.request_body, null, 2)}</pre></details>` : ''}
                        ${ep.response && Object.keys(ep.response).length > 0 ? `<details class="endpoint-details"><summary>Response</summary><pre class="code-block">${JSON.stringify(ep.response, null, 2)}</pre></details>` : ''}
                    </div>
                `).join('')}
            </div>

            ${data.models?.length ? `
                <div class="section-header">
                    <h4>Models</h4>
                    <span class="badge">${data.models.length}</span>
                </div>
                <div class="models-grid">
                    ${data.models.map(m => `
                        <div class="model-card">
                            <div class="model-name">${m.name}</div>
                            <div class="field-list">
                                ${m.fields?.map(f => `
                                    <div class="field-item">
                                        <span class="field-name">${f.name}</span>
                                        <span class="field-type">${f.type}</span>
                                        ${f.required ? '<span class="field-required">*</span>' : ''}
                                    </div>
                                `).join('') || ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            ${data.recommendations?.length ? `
                <div class="section-header"><h4>Recommendations</h4></div>
                <ul class="recommendations-list">
                    ${data.recommendations.map(r => `<li>${r}</li>`).join('')}
                </ul>
            ` : ''}`;
    } else {
        output.innerHTML = `
            <div class="output-header">
                <h3>Output</h3>
                <div class="output-actions">
                    <button class="btn btn-sm" onclick="copyOutput()">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        ${t.copyCode}
                    </button>
                </div>
            </div>
            <pre class="code-block">${typeof data === 'string' ? escapeHtml(data) : JSON.stringify(data, null, 2)}</pre>`;
    }
}

async function generateEndpoint() {
    const t = i18n[currentLang];
    const btn = document.getElementById('endpointBtn');
    const output = document.getElementById('outputContainer');
    const resourceInput = document.getElementById('resourceInput');

    if (!resourceInput.value.trim()) {
        showNotification(t.validationError + ': ' + t.required, 'error');
        resourceInput.focus();
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="btn-spinner"></span>${t.generating}`;
    output.innerHTML = `<div class="loading"><div class="spinner"></div><span>${t.generating}</span></div>`;

    try {
        const methodChips = document.querySelectorAll('.form-group')[1].querySelector('.chips');
        const requestData = {
            resource: resourceInput.value,
            method: getChipValue(methodChips) || 'GET',
            framework: document.getElementById('epFrameworkSelect').value,
            description: document.getElementById('epDescInput').value,
            include_auth: document.getElementById('authCheck').checked,
            include_validation: document.getElementById('validationCheck').checked,
            language: currentLang
        };

        const res = await fetch('/api/endpoint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        lastGeneratedOutput = { type: 'endpoint', data, request: requestData };
        addToHistory('endpoint', `${requestData.method} /${requestData.resource}`, data);
        renderEndpointCode(data);
    } catch (e) {
        output.innerHTML = `<div class="error-state"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><h3>Error</h3><p>${e.message}</p></div>`;
    }

    btn.disabled = false;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>${t.generate}`;
}

function renderEndpointCode(data) {
    const t = i18n[currentLang];
    const output = document.getElementById('outputContainer');

    output.innerHTML = `
        <div class="output-header">
            <h3>Generated Endpoint</h3>
            <div class="output-actions">
                <button class="btn btn-sm" onclick="copyOutput()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    ${t.copyCode}
                </button>
                <button class="btn btn-sm" onclick="downloadOutput('py')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    ${t.downloadCode}
                </button>
            </div>
        </div>

        ${data.imports?.length ? `
            <div class="code-section">
                <div class="code-section-header">Imports</div>
                <pre class="code-block"><code>${escapeHtml(data.imports.join('\n'))}</code></pre>
            </div>
        ` : ''}

        <div class="code-section">
            <div class="code-section-header">Endpoint Code</div>
            <pre class="code-block"><code>${escapeHtml(data.code || JSON.stringify(data, null, 2))}</code></pre>
        </div>

        ${data.models ? `
            <div class="code-section">
                <div class="code-section-header">Models/Schemas</div>
                <pre class="code-block"><code>${escapeHtml(data.models)}</code></pre>
            </div>
        ` : ''}

        ${data.tests ? `
            <div class="code-section">
                <div class="code-section-header">Tests</div>
                <pre class="code-block"><code>${escapeHtml(data.tests)}</code></pre>
            </div>
        ` : ''}

        ${data.explanation ? `<div class="explanation"><p>${data.explanation}</p></div>` : ''}`;
}

async function generateSchema() {
    const t = i18n[currentLang];
    const btn = document.getElementById('schemaBtn');
    const output = document.getElementById('outputContainer');
    const descInput = document.getElementById('schemaDescInput');

    if (!descInput.value.trim()) {
        showNotification(t.validationError + ': ' + t.required, 'error');
        descInput.focus();
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="btn-spinner"></span>${t.generating}`;
    output.innerHTML = `<div class="loading"><div class="spinner"></div><span>${t.generating}</span></div>`;

    try {
        const formatChips = document.querySelectorAll('.form-group')[1].querySelector('.chips');
        const requestData = {
            description: descInput.value,
            format: getChipValue(formatChips) || 'openapi',
            entities: document.getElementById('schemaEntitiesInput').value.split(',').map(e => e.trim()).filter(e => e),
            language: currentLang
        };

        const res = await fetch('/api/schema', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        lastGeneratedOutput = { type: 'schema', data, request: requestData };
        addToHistory('schema', requestData.format.toUpperCase(), data);
        renderSchemaOutput(data);
    } catch (e) {
        output.innerHTML = `<div class="error-state"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><h3>Error</h3><p>${e.message}</p></div>`;
    }

    btn.disabled = false;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>${t.generate}`;
}

function renderSchemaOutput(data) {
    const t = i18n[currentLang];
    const output = document.getElementById('outputContainer');

    output.innerHTML = `
        <div class="output-header">
            <h3>${data.format?.toUpperCase() || 'Schema'}</h3>
            <div class="output-actions">
                <button class="btn btn-sm" onclick="copyOutput()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    ${t.copyCode}
                </button>
                <button class="btn btn-sm" onclick="downloadOutput('yaml')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    ${t.downloadCode}
                </button>
            </div>
        </div>

        ${data.entities?.length ? `
            <div class="meta-tags">
                ${data.entities.map(e => `<span class="meta-tag">${e}</span>`).join('')}
            </div>
        ` : ''}

        <pre class="code-block"><code>${escapeHtml(data.schema || JSON.stringify(data, null, 2))}</code></pre>

        ${data.relationships?.length ? `
            <div class="section-header"><h4>Relationships</h4></div>
            <ul class="relationships-list">
                ${data.relationships.map(r => `<li>${r}</li>`).join('')}
            </ul>
        ` : ''}

        ${data.explanation ? `<div class="explanation"><p>${data.explanation}</p></div>` : ''}`;
}

async function generateDocs() {
    const t = i18n[currentLang];
    const btn = document.getElementById('docsBtn');
    const output = document.getElementById('outputContainer');
    const specInput = document.getElementById('apiSpecInput');

    if (!specInput.value.trim()) {
        showNotification(t.validationError + ': ' + t.required, 'error');
        specInput.focus();
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="btn-spinner"></span>${t.generating}`;
    output.innerHTML = `<div class="loading"><div class="spinner"></div><span>${t.generating}</span></div>`;

    try {
        const formatChips = document.querySelectorAll('.form-group')[1].querySelector('.chips');
        const requestData = {
            api_spec: specInput.value,
            format: getChipValue(formatChips) || 'markdown',
            include_examples: document.getElementById('examplesCheck').checked,
            language: currentLang
        };

        const res = await fetch('/api/documentation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        lastGeneratedOutput = { type: 'docs', data, request: requestData };
        addToHistory('docs', requestData.format, data);
        renderDocsOutput(data);
    } catch (e) {
        output.innerHTML = `<div class="error-state"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><h3>Error</h3><p>${e.message}</p></div>`;
    }

    btn.disabled = false;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>${t.generateDocs}`;
}

function renderDocsOutput(data) {
    const t = i18n[currentLang];
    const output = document.getElementById('outputContainer');

    output.innerHTML = `
        <div class="output-header">
            <h3>Documentation</h3>
            <div class="output-actions">
                <button class="btn btn-sm" onclick="copyOutput()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    ${t.copyCode}
                </button>
                <button class="btn btn-sm" onclick="downloadOutput('md')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    ${t.downloadCode}
                </button>
            </div>
        </div>

        ${data.summary ? `<p class="docs-summary">${data.summary}</p>` : ''}

        ${data.sections?.length ? `
            <div class="docs-sections">
                ${data.sections.map(s => `<span class="section-tag">${s}</span>`).join('')}
            </div>
        ` : ''}

        <div class="docs-content">
            <pre class="code-block markdown">${escapeHtml(data.documentation || JSON.stringify(data, null, 2))}</pre>
        </div>`;
}

function addWelcomeMessage() {
    chatHistory = [{ role: 'assistant', content: i18n[currentLang].welcome }];
}

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (!message) return;

    input.value = '';
    chatHistory.push({ role: 'user', content: message });
    renderChatMessages();

    const messagesContainer = document.getElementById('chatMessages');
    messagesContainer.innerHTML += `<div class="message assistant typing"><span class="typing-indicator"><span></span><span></span><span></span></span></div>`;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    try {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message,
                language: currentLang,
                history: chatHistory.slice(-10)
            })
        });

        const data = await res.json();
        chatHistory.push({ role: 'assistant', content: data.response });
    } catch (e) {
        chatHistory.push({ role: 'assistant', content: 'Error occurred. Please try again.' });
    }

    renderChatMessages();
}

function renderChatMessages() {
    const container = document.getElementById('chatMessages');
    if (!container) return;

    container.innerHTML = chatHistory.map(m => `
        <div class="message ${m.role}">
            ${m.role === 'assistant' ? '<div class="message-avatar">🤖</div>' : ''}
            <div class="message-content">${formatMessage(m.content)}</div>
        </div>
    `).join('');

    container.scrollTop = container.scrollHeight;
}

function formatMessage(content) {
    return content
        .replace(/\n/g, '<br>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/• /g, '&bull; ');
}

function renderHistoryTab() {
    const t = i18n[currentLang];
    const form = document.getElementById('formContainer');

    if (generationHistory.length === 0) {
        form.innerHTML = `
            <div class="empty-history">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h3>${t.historyEmpty}</h3>
            </div>`;
        return;
    }

    form.innerHTML = `
        <div class="history-header">
            <span>${generationHistory.length} items</span>
            <button class="btn btn-sm btn-danger" onclick="clearHistory()">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                ${t.clearHistory}
            </button>
        </div>
        <div class="history-list">
            ${generationHistory.map((item, index) => `
                <div class="history-item" onclick="loadHistoryItem(${index})">
                    <div class="history-item-header">
                        <span class="history-type-badge ${item.type}">${item.type}</span>
                        <span class="history-time">${formatTime(item.timestamp)}</span>
                    </div>
                    <div class="history-item-title">${escapeHtml(item.title)}</div>
                    <button class="history-delete" onclick="event.stopPropagation(); deleteHistoryItem(${index})">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            `).join('')}
        </div>`;
}

function addToHistory(type, title, data) {
    generationHistory.unshift({
        type,
        title,
        data,
        timestamp: Date.now()
    });

    if (generationHistory.length > 50) {
        generationHistory = generationHistory.slice(0, 50);
    }

    localStorage.setItem('apiBuilderHistory', JSON.stringify(generationHistory));
}

function loadHistoryItem(index) {
    const item = generationHistory[index];
    if (!item) return;

    lastGeneratedOutput = { type: item.type, data: item.data };

    switch (item.type) {
        case 'design':
            renderAPIDesign(item.data);
            break;
        case 'endpoint':
            renderEndpointCode(item.data);
            break;
        case 'schema':
            renderSchemaOutput(item.data);
            break;
        case 'docs':
            renderDocsOutput(item.data);
            break;
    }

    showNotification('Loaded from history', 'success');
}

function deleteHistoryItem(index) {
    generationHistory.splice(index, 1);
    localStorage.setItem('apiBuilderHistory', JSON.stringify(generationHistory));
    renderHistoryTab();
}

function clearHistory() {
    generationHistory = [];
    localStorage.setItem('apiBuilderHistory', '[]');
    renderHistoryTab();
    showNotification(i18n[currentLang].clearHistory, 'success');
}

function copyOutput() {
    const t = i18n[currentLang];
    let text = '';

    if (lastGeneratedOutput?.data) {
        if (typeof lastGeneratedOutput.data === 'string') {
            text = lastGeneratedOutput.data;
        } else if (lastGeneratedOutput.data.code) {
            text = lastGeneratedOutput.data.code;
        } else if (lastGeneratedOutput.data.schema) {
            text = lastGeneratedOutput.data.schema;
        } else if (lastGeneratedOutput.data.documentation) {
            text = lastGeneratedOutput.data.documentation;
        } else {
            text = JSON.stringify(lastGeneratedOutput.data, null, 2);
        }
    }

    navigator.clipboard.writeText(text).then(() => {
        showNotification(t.copied, 'success');
    });
}

function downloadOutput(extension) {
    if (!lastGeneratedOutput?.data) return;

    let content = '';
    let filename = `api-${lastGeneratedOutput.type}-${Date.now()}`;

    if (typeof lastGeneratedOutput.data === 'string') {
        content = lastGeneratedOutput.data;
    } else if (lastGeneratedOutput.data.code) {
        content = lastGeneratedOutput.data.code;
    } else if (lastGeneratedOutput.data.schema) {
        content = lastGeneratedOutput.data.schema;
    } else if (lastGeneratedOutput.data.documentation) {
        content = lastGeneratedOutput.data.documentation;
    } else {
        content = JSON.stringify(lastGeneratedOutput.data, null, 2);
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.${extension}`;
    a.click();
    URL.revokeObjectURL(url);
}

function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;

    return date.toLocaleDateString();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (currentTheme === 'system') {
        applyTheme('system');
    }
});
