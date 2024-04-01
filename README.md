# React + TypeScript + Vite
# Yogic Insight
To fix all lint errors, execute the following command: 
npm run lint -- --fix

*only for vs code
Add following in "~/.config/Code/User/settings.json" to fix lint errors on file save: 
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
    "typescript.updateImportsOnFileMove.enabled": "always"
}

To run the dev build, execute the following command:
npm run dev

To create a prod build, execute the following command:
npm run build

To see the preview of a prod build, execute the following command:
npm run preview
