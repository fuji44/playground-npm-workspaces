# Playground npm-workspaces

Try different [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces?v=true).

## Quick start

```shell
npm install
npm run serve
```

access to <http://localhost:3000> on browser.

## Test

```shell
npm run test
```

## Commands

- [npm-init](https://docs.npmjs.com/cli/commands/npm-init)
- [npm-install](https://docs.npmjs.com/cli/commands/npm-install)
- [npm-run-script](https://docs.npmjs.com/cli/commands/npm-run-script)
- [npx](https://docs.npmjs.com/cli/commands/npx)

### workspace management

```shell
# add workspace
npm init -w workspace-xxx

# there is no command to remove a workspace
# remove the workspace directory and remove the workspace entry in the root package.json
```

### dependency management

```shell
# add package-xxx to shared
npm install package-xxx -w shared
# the same command is used for workspace dependencies
npm install shared -w server

# remove package-xxx to shared
npm uninstall package-xxx -w shared

# remove package-xxx on all workspace
npm uninstall package-xxx -ws
```

### run npm-script

```shell
# run a script-xxx of the root package.json
npm run script-xxx

# run a script-xxx of the shared package.json
npm run script-xxx -w shared
# or
cd shared
npm run script-xxx

# run a script-xxx of all workspace package.json
npm run script-xxx -ws
```

### use npx

```shell
# run ts-node xxx.ts
npx -w shared ts-node xxx.ts
```
