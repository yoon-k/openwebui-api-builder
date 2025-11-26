const i18n = {
    en: { title: "AI API Builder", subtitle: "Design APIs, generate endpoints, create schemas", inputPanel: "INPUT", outputPanel: "OUTPUT",
        tabDesign: "Design", tabEndpoint: "Endpoint", tabSchema: "Schema", tabDocs: "Docs", tabChat: "Chat",
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
        welcome: "Hi! I'm your API development assistant. I can help with:\n\n• REST/GraphQL API design\n• Endpoint code generation\n• Schema definitions\n• API documentation\n• Best practices" },
    ko: { title: "AI API 빌더", subtitle: "API 설계, 엔드포인트 생성, 스키마 작성", inputPanel: "입력", outputPanel: "출력",
        tabDesign: "설계", tabEndpoint: "엔드포인트", tabSchema: "스키마", tabDocs: "문서", tabChat: "채팅",
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
        welcome: "안녕하세요! API 개발 도우미입니다:\n\n• REST/GraphQL API 설계\n• 엔드포인트 코드 생성\n• 스키마 정의\n• API 문서화\n• 모범 사례" },
    ja: { title: "AI APIビルダー", subtitle: "API設計、エンドポイント生成、スキーマ作成", inputPanel: "入力", outputPanel: "出力",
        tabDesign: "設計", tabEndpoint: "エンドポイント", tabSchema: "スキーマ", tabDocs: "ドキュメント", tabChat: "チャット",
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
        welcome: "こんにちは！API開発アシスタントです:\n\n• REST/GraphQL API設計\n• エンドポイントコード生成\n• スキーマ定義\n• APIドキュメント\n• ベストプラクティス" }
};

let currentLang = 'en', currentTab = 'design', chatHistory = [];
document.addEventListener('DOMContentLoaded', () => { setLanguage('en'); addWelcomeMessage(); });

function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];
    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('inputPanelTitle').textContent = t.inputPanel;
    document.getElementById('outputPanelTitle').textContent = t.outputPanel;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    updateTabs(); updateForm();
}

function updateTabs() {
    const t = i18n[currentLang];
    document.getElementById('tabDesign').textContent = t.tabDesign;
    document.getElementById('tabEndpoint').textContent = t.tabEndpoint;
    document.getElementById('tabSchema').textContent = t.tabSchema;
    document.getElementById('tabDocs').textContent = t.tabDocs;
    document.getElementById('tabChat').textContent = t.tabChat;
}

function showTab(tab) { currentTab = tab; document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab)); updateForm(); }

function updateForm() {
    const t = i18n[currentLang], form = document.getElementById('formContainer');
    const frameworks = ['fastapi', 'flask', 'express', 'django', 'spring', 'nestjs', 'gin', 'rails'];
    const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
    const schemaFormats = ['openapi', 'jsonschema', 'graphql', 'protobuf'];
    const docFormats = ['markdown', 'openapi', 'swagger'];

    if (currentTab === 'design') {
        form.innerHTML = `
            <div class="form-group"><label class="form-label">${t.description}</label><textarea id="descInput" class="form-textarea" rows="3" placeholder="${t.descPlaceholder}"></textarea></div>
            <div class="form-group"><label class="form-label">${t.apiStyle}</label>
                <div class="chips"><span class="chip active" data-value="rest" onclick="selectChip(this, 'style')">REST</span><span class="chip" data-value="graphql" onclick="selectChip(this, 'style')">GraphQL</span><span class="chip" data-value="grpc" onclick="selectChip(this, 'style')">gRPC</span></div>
            </div>
            <div class="form-group"><label class="form-label">${t.framework}</label>
                <select id="frameworkSelect" class="form-select">${frameworks.map(f => `<option value="${f}">${f.charAt(0).toUpperCase() + f.slice(1)}</option>`).join('')}</select>
            </div>
            <div class="form-group"><label class="form-label">${t.entities}</label><input type="text" id="entitiesInput" class="form-input" placeholder="${t.entitiesPlaceholder}"></div>
            <div class="form-group"><label class="form-label">${t.features}</label><input type="text" id="featuresInput" class="form-input" placeholder="${t.featuresPlaceholder}"></div>
            <button id="designBtn" class="btn btn-primary" style="width:100%" onclick="designAPI()">${t.design}</button>`;
    } else if (currentTab === 'endpoint') {
        form.innerHTML = `
            <div class="form-group"><label class="form-label">${t.resource}</label><input type="text" id="resourceInput" class="form-input" placeholder="e.g., users, products"></div>
            <div class="form-group"><label class="form-label">${t.method}</label>
                <div class="chips">${methods.map((m, i) => `<span class="chip ${i === 0 ? 'active' : ''}" data-value="${m}" onclick="selectChip(this, 'method')">${m}</span>`).join('')}</div>
            </div>
            <div class="form-group"><label class="form-label">${t.framework}</label>
                <select id="epFrameworkSelect" class="form-select">${frameworks.map(f => `<option value="${f}">${f.charAt(0).toUpperCase() + f.slice(1)}</option>`).join('')}</select>
            </div>
            <div class="form-group"><label class="form-label">${t.endpointDesc}</label><textarea id="epDescInput" class="form-textarea" rows="2" placeholder="${t.endpointDescPlaceholder}"></textarea></div>
            <div class="form-group" style="display:flex;gap:1rem">
                <label style="display:flex;align-items:center;gap:0.5rem;cursor:pointer"><input type="checkbox" id="authCheck" checked> ${t.includeAuth}</label>
                <label style="display:flex;align-items:center;gap:0.5rem;cursor:pointer"><input type="checkbox" id="validationCheck" checked> ${t.includeValidation}</label>
            </div>
            <button id="endpointBtn" class="btn btn-primary" style="width:100%" onclick="generateEndpoint()">${t.generate}</button>`;
    } else if (currentTab === 'schema') {
        form.innerHTML = `
            <div class="form-group"><label class="form-label">${t.schemaDesc}</label><textarea id="schemaDescInput" class="form-textarea" rows="4" placeholder="${t.schemaDescPlaceholder}"></textarea></div>
            <div class="form-group"><label class="form-label">${t.schemaFormat}</label>
                <div class="chips">${schemaFormats.map((f, i) => `<span class="chip ${i === 0 ? 'active' : ''}" data-value="${f}" onclick="selectChip(this, 'schemaFormat')">${f.toUpperCase()}</span>`).join('')}</div>
            </div>
            <div class="form-group"><label class="form-label">${t.entities}</label><input type="text" id="schemaEntitiesInput" class="form-input" placeholder="${t.entitiesPlaceholder}"></div>
            <button id="schemaBtn" class="btn btn-primary" style="width:100%" onclick="generateSchema()">${t.generate}</button>`;
    } else if (currentTab === 'docs') {
        form.innerHTML = `
            <div class="form-group"><label class="form-label">${t.apiSpec}</label><textarea id="apiSpecInput" class="form-textarea" rows="8" placeholder="${t.apiSpecPlaceholder}"></textarea></div>
            <div class="form-group"><label class="form-label">${t.docFormat}</label>
                <div class="chips">${docFormats.map((f, i) => `<span class="chip ${i === 0 ? 'active' : ''}" data-value="${f}" onclick="selectChip(this, 'docFormat')">${f.charAt(0).toUpperCase() + f.slice(1)}</span>`).join('')}</div>
            </div>
            <div class="form-group"><label style="display:flex;align-items:center;gap:0.5rem;cursor:pointer"><input type="checkbox" id="examplesCheck" checked> ${t.includeExamples}</label></div>
            <button id="docsBtn" class="btn btn-primary" style="width:100%" onclick="generateDocs()">${t.generateDocs}</button>`;
    } else if (currentTab === 'chat') {
        form.innerHTML = `<div id="chatMessages" class="chat-messages"></div><div class="chat-input-container"><input type="text" id="chatInput" class="form-input" placeholder="${t.chatPlaceholder}" onkeypress="if(event.key==='Enter')sendMessage()"><button class="btn btn-primary" onclick="sendMessage()">${t.send}</button></div>`;
        renderChatMessages();
    }
}

function selectChip(el, group) { el.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active')); el.classList.add('active'); }
function getSelectedChip(group) { return document.querySelector(`.chips .chip.active[data-value]`)?.dataset.value || 'rest'; }
function getChipValue(container) { return container.querySelector('.chip.active')?.dataset.value; }

async function designAPI() {
    const t = i18n[currentLang], btn = document.getElementById('designBtn'), output = document.getElementById('outputContainer');
    btn.disabled = true; btn.textContent = t.designing;
    output.innerHTML = `<div class="loading"><div class="spinner"></div>${t.designing}</div>`;
    try {
        const styleChips = document.querySelector('.form-group:nth-child(2) .chips');
        const res = await fetch('/api/design', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
            description: document.getElementById('descInput').value,
            api_style: getChipValue(styleChips) || 'rest',
            framework: document.getElementById('frameworkSelect').value,
            entities: document.getElementById('entitiesInput').value.split(',').map(e => e.trim()).filter(e => e),
            features: document.getElementById('featuresInput').value.split(',').map(f => f.trim()).filter(f => f),
            language: currentLang
        })});
        const data = await res.json();
        renderAPIDesign(data);
    } catch (e) { output.innerHTML = `<div class="empty-state"><p>Error: ${e.message}</p></div>`; }
    btn.disabled = false; btn.textContent = t.design;
}

function renderAPIDesign(data) {
    const output = document.getElementById('outputContainer');
    if (data.endpoints) {
        output.innerHTML = `
            <h3 style="margin-bottom:1rem">${data.api_name || 'API Design'}</h3>
            <p style="color:var(--text-secondary);margin-bottom:1rem">${data.description || ''}</p>
            <h4 style="margin:1rem 0 0.5rem">Endpoints</h4>
            ${data.endpoints.map(ep => `<div class="endpoint-item"><span class="method-badge method-${ep.method}">${ep.method}</span><code>${ep.path}</code><p style="margin-top:0.5rem;color:var(--text-secondary);font-size:0.8125rem">${ep.description}</p></div>`).join('')}
            ${data.models?.length ? `<h4 style="margin:1rem 0 0.5rem">Models</h4>${data.models.map(m => `<div class="model-card"><div class="model-name">${m.name}</div><div class="field-list">${m.fields?.map(f => `${f.name}: ${f.type}${f.required ? ' *' : ''}`).join(', ')}</div></div>`).join('')}` : ''}
            ${data.recommendations?.length ? `<h4 style="margin:1rem 0 0.5rem">Recommendations</h4><ul style="padding-left:1.5rem;color:var(--text-secondary)">${data.recommendations.map(r => `<li>${r}</li>`).join('')}</ul>` : ''}`;
    } else {
        output.innerHTML = `<div class="code-block">${typeof data === 'string' ? data : JSON.stringify(data, null, 2)}</div>`;
    }
}

async function generateEndpoint() {
    const t = i18n[currentLang], btn = document.getElementById('endpointBtn'), output = document.getElementById('outputContainer');
    btn.disabled = true; btn.textContent = t.generating;
    output.innerHTML = `<div class="loading"><div class="spinner"></div>${t.generating}</div>`;
    try {
        const methodChips = document.querySelectorAll('.form-group')[1].querySelector('.chips');
        const res = await fetch('/api/endpoint', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
            resource: document.getElementById('resourceInput').value,
            method: getChipValue(methodChips) || 'GET',
            framework: document.getElementById('epFrameworkSelect').value,
            description: document.getElementById('epDescInput').value,
            include_auth: document.getElementById('authCheck').checked,
            include_validation: document.getElementById('validationCheck').checked,
            language: currentLang
        })});
        const data = await res.json();
        output.innerHTML = `<div class="code-block">${data.code || JSON.stringify(data, null, 2)}</div>${data.explanation ? `<p style="margin-top:1rem;color:var(--text-secondary)">${data.explanation}</p>` : ''}`;
    } catch (e) { output.innerHTML = `<div class="empty-state"><p>Error: ${e.message}</p></div>`; }
    btn.disabled = false; btn.textContent = t.generate;
}

async function generateSchema() {
    const t = i18n[currentLang], btn = document.getElementById('schemaBtn'), output = document.getElementById('outputContainer');
    btn.disabled = true; btn.textContent = t.generating;
    output.innerHTML = `<div class="loading"><div class="spinner"></div>${t.generating}</div>`;
    try {
        const formatChips = document.querySelectorAll('.form-group')[1].querySelector('.chips');
        const res = await fetch('/api/schema', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
            description: document.getElementById('schemaDescInput').value,
            format: getChipValue(formatChips) || 'openapi',
            entities: document.getElementById('schemaEntitiesInput').value.split(',').map(e => e.trim()).filter(e => e),
            language: currentLang
        })});
        const data = await res.json();
        output.innerHTML = `<div class="code-block">${data.schema || JSON.stringify(data, null, 2)}</div>${data.explanation ? `<p style="margin-top:1rem;color:var(--text-secondary)">${data.explanation}</p>` : ''}`;
    } catch (e) { output.innerHTML = `<div class="empty-state"><p>Error: ${e.message}</p></div>`; }
    btn.disabled = false; btn.textContent = t.generate;
}

async function generateDocs() {
    const t = i18n[currentLang], btn = document.getElementById('docsBtn'), output = document.getElementById('outputContainer');
    btn.disabled = true; btn.textContent = t.generating;
    output.innerHTML = `<div class="loading"><div class="spinner"></div>${t.generating}</div>`;
    try {
        const formatChips = document.querySelectorAll('.form-group')[1].querySelector('.chips');
        const res = await fetch('/api/documentation', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
            api_spec: document.getElementById('apiSpecInput').value,
            format: getChipValue(formatChips) || 'markdown',
            include_examples: document.getElementById('examplesCheck').checked,
            language: currentLang
        })});
        const data = await res.json();
        output.innerHTML = `<div class="code-block">${data.documentation || JSON.stringify(data, null, 2)}</div>`;
    } catch (e) { output.innerHTML = `<div class="empty-state"><p>Error: ${e.message}</p></div>`; }
    btn.disabled = false; btn.textContent = t.generateDocs;
}

function addWelcomeMessage() { chatHistory = [{ role: 'assistant', content: i18n[currentLang].welcome }]; }
async function sendMessage() {
    const input = document.getElementById('chatInput'), message = input.value.trim();
    if (!message) return;
    input.value = ''; chatHistory.push({ role: 'user', content: message }); renderChatMessages();
    try {
        const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message, language: currentLang, history: chatHistory.slice(-10) }) });
        const data = await res.json();
        chatHistory.push({ role: 'assistant', content: data.response }); renderChatMessages();
    } catch (e) { chatHistory.push({ role: 'assistant', content: 'Error occurred.' }); renderChatMessages(); }
}
function renderChatMessages() {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    container.innerHTML = chatHistory.map(m => `<div class="message ${m.role}">${m.content.replace(/\n/g, '<br>')}</div>`).join('');
    container.scrollTop = container.scrollHeight;
}
