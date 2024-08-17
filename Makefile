compile:
	@echo 'Compiling TS'
	@npm exec tsc

lint:
	@echo 'Running prettier'
	@pnpm exec prettier . --write
	@echo 'Running ESLint'
	@npx eslint src/**

