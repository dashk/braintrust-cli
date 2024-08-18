compile:
	@echo 'Compiling TS'
	@npm exec tsc

gendoc:
	@echo 'Generating docs'
	@oclif readme

lint:
	@echo 'Running prettier'
	@pnpm exec prettier . --write
	@echo 'Running ESLint'
	@npx eslint src/**

