# GESTÃO DE CONSELHO - RM
### Sistema de Apoio Pedagógico e Deliberação Escolar
**Desenvolvido por Ronnie Malagutti**  
*Colégio Estadual Cívico-Militar Alberto Santos Dumont - E.F.M.N.P (Cafelândia/PR)*

---

## 🎨 Identidade Visual e Capa Fluida
- **Capa com Ondas Orgânicas Fluidas:**
  - Lateral Esquerda: Onda fluida em verde-esmeralda vibrante.
  - Lateral Direita: Onda fluida em azul royal e ciano elétrico.
- **Logotipo Oficial Integrado:** Brasão circular com elementos pedagógicos e a marca RM em 3D.
- **Design Autônomo e Limpo:** Retirados cabeçalhos burocráticos de secretarias de estado da capa.
- **Interface Anti-Frustração (Acessibilidade Digital):** Botões grandes e confortáveis, linguagem 100% amigável para professores sem fluidez tecnológica e alertas visuais tipo "Toast" para confirmação imediata.

---

## ⚡ Novas Funcionalidades Pedagógicas Implementadas

### 1. Discriminação Específica de Disciplinas Abaixo da Média
- Os cartões da tela inicial apontam **nominalmente quais disciplinas** estão abaixo de 6,0 e suas respectivas notas (ex.: `Matemática: 5,2 | Língua Portuguesa: 5,8`).

### 2. Regras Automáticas de Arredondamento do Conselho
- **Borda de Aprovação (5,6 a 5,9):** O sistema emite a sugestão: `[ 🎯 Arredondar para 6,0 ]`.
- **Piso Pedagógico (< 4,0 para Alunos Frequentes):** O sistema sugere elevar para a nota mínima `[ ⚖️ Arredondar para 4,0 ]`, garantindo o direito à recuperação para estudantes assíduos (< 20% de faltas).
- **Bloqueio por Infrequência (≥ 20%):** Se o aluno teve 20% ou mais de faltas no trimestre, a regra do piso **não se aplica**, mantendo a nota insuficiente com o alerta: `[ ❌ Sem arredondamento (Infrequência crítica ≥ 20%) ]`.

### 3. Registro Permanente de Laudos Clínicos (Educação Especial)
- Mapeamento de TEA, TDAH, Dislexia, TOD e Altas Habilidades.
- **Persistência Cumulativa:** Os laudos ficam gravados de forma permanente no prontuário do aluno e não são apagados em novas importações de relatórios do RCO.

### 4. Gestão de Atestados Médicos & Compensação via Classroom
- **Fase Vigente:** Enquanto o atestado estiver no prazo, o card do estudante fica em destaque com **borda pulsante ciano** e etiqueta `[ 🩺 Atestado Vigente ]`.
- **Fase Expirada:** O sistema gera automaticamente o lembrete pedagógico: `[ 💻 Compensar conteúdos e atividades via Google Classroom ]`.
- **Botão "Copiar Aviso aos Professores":** Gera em 1 clique o comunicado formatado para colar no grupo de WhatsApp dos docentes.

### 5. Agenda de Convocação com Horário no WhatsApp
- A mensagem oficial enviada aos responsáveis sugere data e um **horário reservado** (ex.: 08:30, 09:00, 09:30), organizando a fila de atendimento da equipe pedagógica.

### 6. Ata Oficial do Conselho & Suplemento Reservado
- **Coluna "Média Geral" Excluída:** O documento oficial agora foca exclusivamente na assiduidade, parecer do conselho e plano de ação.
- **Encaminhamentos Confidenciais:** Órgãos de proteção (Conselho Tutelar, CAPS, CRAS, BPEC) foram transferidos para o **"Suplemento Reservado da Equipe Pedagógica"**, um anexo confidencial separado da ata pública.

---

## 🚀 Como Testar Imediatamente
1. Acesse: `C:\Users\user\.gemini\antigravity\scratch\gestao-conselho-pr`
2. Dê dois cliques no arquivo **[index.html](file:///C:/Users/user/.gemini/antigravity/scratch/gestao-conselho-pr/index.html)**.
3. Teste os atestados, veja o visual das ondas e abra a Ata Oficial!
