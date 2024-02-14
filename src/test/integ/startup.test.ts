import path from "path";
import os from "os";
import fs from "fs";

import vscode, { Selection } from "vscode";
import { NeovimClient } from "neovim";

import { assertContent, assertLogs, attachTestNvimClient, closeAllActiveEditors, closeNvimClient, wait } from "../utils";

describe("startup", () => {
    let client: NeovimClient;
    before(async () => {
        client = await attachTestNvimClient();
    });
    after(async () => {
        await closeNvimClient(client);
        await closeAllActiveEditors();
    });

    beforeEach(async () => {
        await closeAllActiveEditors();
    });

    it("searches for Nvim on the system", async () => {
        await assertLogs([/Nvim info/, /configDir:/, /nvimVersion:/, /logFile:/]);
        // MainController.validateNvim('9999.0.0');
        // await client.lua(`
        //     vim.ui.input({ prompt = 'Enter a value: ' }, function(input)
        //         vim.g._res = input
        //     end)
        // `);
        // // wait enough time for it to open
        // await wait(100);
        // // cancel the dialog
        // await vscode.commands.executeCommand("workbench.action.closeQuickOpen");
        // // check the results
        // const actual_input = await client.getVar("_res");
        // assert.strictEqual(actual_input, null);
    });
});
