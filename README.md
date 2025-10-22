# Planify

## Webbasierte Anwendung zur Planung und Organisation von Veranstaltungen

Autoren: Marius Gutschalk, Nils Beck, Julian Blönnigen, Lasse Schillinger

Google Drive: <https://drive.google.com/drive/folders/18l05wbNOK7Yukb00bOl6CF8HusI97xQM?usp=drive_link>

---

## Ziel

Ziel des Projekts **Planify** ist die Entwicklung einer webbasierten Anwendung, die die **Planung, Organisation und Koordination von Events** (z. B. Partys, Vereinsveranstaltungen, Meetings) unterstützt.  
Das System ermöglicht mehreren Benutzern, Events gemeinsam zu verwalten, Aufgaben zu verteilen und die Kommunikation innerhalb eines Teams zu strukturieren.  

**Hauptziele:**

- Effiziente Planung und Verwaltung von Events
- Zentrale Übersicht über Aufgaben, Teilnehmer und Termine
- Einfache Kommunikation zwischen Organisatoren und Teilnehmern
- Nachvollziehbare Abläufe durch Benutzerrollen und Statusanzeigen

---

## Vorteil

**Planify** bietet im Gegensatz zu klassischen Tabellen oder Messenger-Gruppen eine **strukturierte, benutzerfreundliche Plattform**, die alle relevanten Informationen zu einem Event zentralisiert.  

**Vorteile für Nutzer:**

- Keine chaotischen WhatsApp-Nachrichten oder E-Mail-Ketten mehr  
- Klare Aufgabenverteilung und Verantwortlichkeiten  
- Jederzeit abrufbarer Eventstatus  
- Bessere Nachvollziehbarkeit von Änderungen und Zuständigkeiten  

**Vorteile für das Projektteam:**

- Klare Architektur mit Trennung von Frontend, Backend und Datenbank  
- Dokumentierbare Prozesse für Analyse, Design, Implementierung und Tests  
- Gut skalierbare Basis für spätere Erweiterungen (z. B. Kalender-API, Benachrichtigungen)

---

## Metriken

Zur Erfolgsmessung werden folgende **Metriken** definiert:

| Kategorie | Metrik | Zielwert |
|------------|--------|-----------|
| **Funktionalität** | Anzahl implementierter Kernfunktionen (Event, Aufgaben, Benutzer, Kommentare) | ≥ 90 % der spezifizierten Anforderungen |
| **Benutzerfreundlichkeit** | Durchschnittliche Navigationsschritte bis zur Zielaktion | ≤ 3 Schritte |
| **Performance** | Durchschnittliche Antwortzeit des Servers | ≤ 500 ms |
| **Zuverlässigkeit** | Fehlerrate bei Standard-Use-Cases | ≤ 2 % |
| **Teamkoordination** | Erfüllte Meilensteine im Zeitplan | ≥ 95 % |
| **Codequalität** | Linting-Fehler pro 1.000 Zeilen Code | ≤ 5 |

---

## Rahmenbedingungen

### Standards für Produkte und Systeme

- **Softwarearchitektur:** Client-Server-Modell (REST-API)
- **Programmiersprachen:**  
  - Frontend: React (JavaScript/TypeScript)  
  - Backend: Node.js (Express) oder Java (Spring Boot)
- **Datenbank:** PostgreSQL oder MySQL  
- **Versionsverwaltung:** Git / GitHub  
- **Dokumentation:** Markdown, UML-Diagramme (PlantUML), PDF-Berichte  
- **Teststandards:** Unit-Tests (Jest/JUnit), Integrationstests mit Postman
- **Stakeholder:** Hochschule(DHBW), Universitäten, Unternehemn, Privatpersonen

---

### Rechtliche Bestimmungen

- **Datenschutz:** DSGVO-konforme Speicherung von Benutzerdaten  
  - Passwörter werden gehasht (z. B. bcrypt)  
  - Keine unnötige Speicherung personenbezogener Daten  
- **Lizenzierung:** Open-Source-Lizenzen (z. B. MIT oder Apache 2.0) für externe Bibliotheken  
- **Urheberrecht:** Quellcode und Inhalte sind Eigenleistung des Projektteams  

---

### Projekt- und Produktgegner

- Konkurrenzprodukte wie Google Calendar oder Trello  

---

### Produktbudget

Da es sich um ein Hochschulprojekt handelt, wird **kein externes Budget** benötigt.  
Kosten fallen nur für:

- Entwicklungsumgebung (lokal, kostenlos)
- Optionale Hosting-Kosten (z. B. Render, Railway, Vercel – meist mit Free-Tier)  

**Gesamtkosten:** < **50 €** (nur bei optionalem Hosting oder Domain)

---

### Zeitliche Rahmenbedingungen

- **Projektlaufzeit:** 2 Semester / ca. **6 Monate**  
- **Phasen:**
  1. Anforderungsanalyse (2 Wochen)  
  2. Systementwurf & Architekturplanung (3 Wochen)  
  3. Implementierung (8 Wochen)  
  4. Testphase & Fehlerbehebung (4 Wochen)  
  5. Dokumentation & Präsentation (3 Wochen)  

**Puffer:** 2–3 Wochen für unerwartete Bugs, Gruppenausfälle oder Realitätszusammenbrüche

---

## Risiken

| Risiko | Wahrscheinlichkeit | Beschreibung | Gegenmaßnahme |
|--------|--------------------|---------------|----------------|
| **Teamkoordination** | 90% | Unklare Aufgabenverteilung oder Kommunikationsprobleme | Wöchentliche Meetings, Aufgabenverwaltung in GitHub Projects |
| **Technische Komplexität** | 60% | Schwierigkeiten mit Frameworks oder Datenbankmodell | Frühzeitiger Prototyp, regelmäßige Code-Reviews |
| **Zeitmangel** | 10% | Überschneidung mit Prüfungsphasen oder anderen Projekten | Fester Zeitplan mit Meilensteinen |
| **Versionskonflikte** | 100% | Merge-Konflikte im Git-Repository | Branch-Strategie (z. B. GitFlow) |
| **Datenverlust** | 70% | Fehlerhafte Migration oder Drop der DB | Regelmäßige Backups |
| **Motivationsverlust** | 100% | Teammitglieder verlieren Interesse | Aufgabenrotation, Fortschrittspräsentationen |
| **Mitgliederverlust** | 50% | Exmatrikulation eines Mitglieds | Mehr Lernen, Aufgaben gleich verteilen |

---

## ToGo / NotToGo

### **ToGo:**

- Anforderungen sind realistisch und klar definiert  
- Team besitzt notwendige technische Kenntnisse  
- Entwicklungsumgebung und Tools stehen fest  
- Zeitrahmen und Dokumentationsplan vorhanden  

### **NotToGo:**

- Kein funktionsfähiges Grundsystem nach der Hälfte der Projektzeit  
- Teamkommunikation zusammengebrochen  
- Anforderungen ändern sich fundamental  
- Technische Kernkomponenten (z. B. Datenbank oder Auth) scheitern dauerhaft

---

## Development Guide

### Prerequisites

- **Node.js** 20.x or higher
- **pnpm** 10.x (package manager)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/julian-bloennigen/Planify.git
cd Planify

# Install dependencies
pnpm install
```

### Project Structure

```text
planify/
├── apps/
│   ├── frontend/          # React + Vite frontend
│   │   ├── src/
│   │   │   ├── App.tsx
│   │   │   ├── App.test.tsx
│   │   │   └── test/      # Test setup
│   │   ├── coverage/      # Test coverage reports
│   │   └── vite.config.ts
│   └── backend/           # Express API backend
│       ├── src/
│       │   ├── app.ts     # Express app (testable)
│       │   ├── server.ts  # Server entry point
│       │   └── app.test.ts
│       └── coverage/      # Test coverage reports
├── e2e/                   # Playwright E2E tests
│   ├── tests/
│   │   └── smoke.spec.ts
│   └── playwright.config.ts
├── scripts/
│   └── merge-coverage.mjs # Coverage merging script
├── coverage/              # Merged coverage reports
└── .github/
    └── workflows/
        └── build.yml      # CI/CD pipeline
```

### Running the Application

#### Development Mode

```bash
# Start both frontend and backend in development mode
pnpm dev

# Or run them separately:
pnpm -C apps/frontend dev    # Frontend on http://localhost:5173
pnpm -C apps/backend dev      # Backend on http://localhost:3000
```

#### Production Mode

```bash
# Build both frontend and backend
pnpm build:prod

# Start production server (backend serves built frontend)
pnpm start:prod

# Access the app at http://localhost:3000
```

The production server serves the built frontend from the backend, providing a single-origin deployment.

### Testing

#### Frontend Tests (Vitest + JSDOM + React Testing Library)

```bash
# Run frontend tests
pnpm -C apps/frontend test

# Run with watch mode
pnpm -C apps/frontend test:watch

# Run with coverage
pnpm -C apps/frontend test:ci
```

**Frontend test configuration:**

- Environment: JSDOM (browser-like)
- Framework: Vitest with React Testing Library
- Coverage: Line, branch, function, statement coverage
- Location: `apps/frontend/coverage/`

#### Backend Tests (Vitest + Supertest)

```bash
# Run backend tests
pnpm -C apps/backend test

# Run with watch mode
pnpm -C apps/backend test:watch

# Run with coverage
pnpm -C apps/backend test:ci
```

**Backend test configuration:**

- Environment: Node.js
- Framework: Vitest with Supertest for API testing
- Coverage: Line, branch, function, statement coverage
- Location: `apps/backend/coverage/`

#### Run All Tests

```bash
# Run all unit tests (frontend + backend)
pnpm test

# Run all tests with coverage (CI mode)
pnpm test:ci
```

#### E2E Smoke Tests (Playwright)

```bash
# Run E2E tests (headless)
pnpm e2e

# Run with UI mode
pnpm e2e:ui

# Run in debug mode
pnpm -C e2e test:debug
```

**E2E test configuration:**

- Framework: Playwright
- Browser: Chromium (can be extended)
- Tests automatically start the dev server
- Smoke tests verify core functionality

### Coverage Reporting

#### Merge Coverage Reports

```bash
# Merge frontend and backend coverage into single report
pnpm coverage:merge
```

This creates a unified coverage report at `coverage/lcov.info` that combines:

- Frontend coverage from `apps/frontend/coverage/lcov.info`
- Backend coverage from `apps/backend/coverage/lcov.info`

The merged report is used by SonarCloud for code quality analysis.

### Code Quality

#### Linting

```bash
# Lint all packages
pnpm lint

# Lint specific package
pnpm -C apps/frontend lint
pnpm -C apps/backend lint
```

#### SonarCloud Analysis

SonarCloud analysis runs automatically in CI/CD on every push and pull request. It includes:

- Code quality metrics
- Code coverage (merged from frontend + backend)
- Security vulnerabilities
- Code smells and technical debt

**Local SonarCloud setup** requires the SonarCloud CLI (not covered here).

---

## CI/CD Pipeline

### GitHub Actions Workflow

The CI/CD pipeline (`.github/workflows/build.yml`) runs on every push and pull request to `main`:

#### Pipeline Jobs

1. **Install Dependencies**
   - Sets up Node.js and pnpm
   - Installs all dependencies
   - Caches node_modules for faster subsequent runs

2. **Frontend Tests**
   - Runs frontend unit tests with coverage
   - Uploads coverage artifact
   - Status check: ✅ Required for merge

3. **Backend Tests**
   - Runs backend API tests with coverage
   - Uploads coverage artifact
   - Status check: ✅ Required for merge

4. **SonarCloud Analysis**
   - Downloads frontend and backend coverage
   - Merges coverage reports
   - Runs SonarCloud quality gate analysis
   - Status check: ✅ Required for merge

5. **E2E Smoke Tests** *(Optional)*
   - Runs Playwright smoke tests
   - Uploads test results and reports
   - Status check: ⚠️ Optional (can be made required)

### Artifacts

Each CI run produces downloadable artifacts:

- **frontend-coverage**: Frontend test coverage reports (HTML + LCOV)
- **backend-coverage**: Backend test coverage reports (HTML + LCOV)
- **merged-coverage**: Combined coverage report for SonarCloud
- **e2e-results**: E2E test results
- **playwright-report**: Interactive Playwright HTML report

Artifacts are available for **7 days** after each run.

### Status Checks

Pull requests must pass the following checks before merging:

- ✅ Frontend Tests (must pass)
- ✅ Backend Tests (must pass)
- ✅ SonarCloud Quality Gate (must pass)
- ⚠️ E2E Smoke Tests (optional, can be made required)

### Branch Protection

To enable branch protection (Task 7):

1. Go to **Settings** → **Branches** → **Branch protection rules**
2. Add rule for `main` branch:
   - ☑ Require pull request before merging
   - ☑ Require status checks to pass before merging
   - Select required checks:
     - `Frontend Tests`
     - `Backend Tests`
     - `SonarCloud Analysis`
     - *(Optional)* `E2E Smoke Tests`
   - ☑ Require branches to be up to date before merging

---

## Quality Standards

### Test Coverage Goals

- **Overall Coverage**: > 80%
- **New Code Coverage**: > 90% (enforced by SonarCloud)
- **Unit Tests**: All business logic must be tested
- **API Tests**: All endpoints must have integration tests
- **E2E Tests**: Critical user flows must be covered

### SonarCloud Quality Gate

The project enforces the following quality gate on new code:

- ✅ Coverage > 80%
- ✅ No new bugs
- ✅ No new vulnerabilities
- ✅ No new security hotspots
- ✅ Maintainability rating: A
- ✅ Reliability rating: A
- ✅ Security rating: A

---

## Troubleshooting

### Tests Failing Locally

```bash
# Clear all caches and reinstall
pnpm store prune
rm -rf node_modules apps/*/node_modules
pnpm install

# Rebuild everything
pnpm build:prod
```

### Coverage Not Appearing in SonarCloud

1. Verify coverage files exist locally:

   ```bash
   ls -la apps/frontend/coverage/lcov.info
   ls -la apps/backend/coverage/lcov.info
   ```

2. Check merged coverage:

   ```bash
   pnpm coverage:merge
   cat coverage/lcov.info
   ```

3. Verify `sonar-project.properties` has correct path:

   ```properties
   sonar.javascript.lcov.reportPaths=coverage/lcov.info
   ```

### E2E Tests Timing Out

```bash
# Increase timeout in playwright.config.ts
webServer: {
  timeout: 120000, // 2 minutes
}

# Or run with more time
pnpm -C e2e exec playwright test --timeout=60000
```

---

## Team Workflow

### Making Changes

1. **Create feature branch**

   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes and add tests**
   - Add unit tests for new functions/components
   - Add API tests for new endpoints
   - Update E2E tests if user flows change

3. **Run tests locally**

   ```bash
   pnpm test:ci
   pnpm e2e
   ```

4. **Commit and push**

   ```bash
   git add .
   git commit -m "feat: add my feature"
   git push origin feature/my-feature
   ```

5. **Create Pull Request**
   - GitHub Actions will run all checks
   - Review coverage reports in artifacts
   - Check SonarCloud analysis results
   - Address any failing checks

6. **Merge after approval**
   - All required checks must pass
   - Code review approved
   - Branch is up to date with main

### Viewing Test Results

**In CI:**

1. Go to GitHub Actions → Select workflow run
2. Click on job (e.g., "Frontend Tests")
3. Download artifacts to view detailed reports

**Locally:**

```bash
# View coverage in browser
open apps/frontend/coverage/index.html
open apps/backend/coverage/index.html

# View E2E report
pnpm -C e2e exec playwright show-report
```

---

## Contact & Support

For questions or issues:

- Create a GitHub issue
- Contact team via Google Drive
- Check documentation in `docs/` folder
