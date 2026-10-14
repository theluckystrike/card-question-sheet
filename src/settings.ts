import { PluginSettingTab, type SettingDefinitionItem } from 'obsidian';
import { sponsorsSettingItems } from './license/github-obsidian';
import { PRO_UI } from './pro';
import type CardQuestionSheetPlugin from './main';
export class CardQuestionSheetSettingTab extends PluginSettingTab {
 constructor(app: ConstructorParameters<typeof PluginSettingTab>[0], private tool: CardQuestionSheetPlugin) { super(app, tool); }
 getSettingDefinitions(): SettingDefinitionItem[] {
  return [...(this.tool.pro ? sponsorsSettingItems(this.tool.pro, PRO_UI) : []), { name: 'Page settings', desc: 'Free export uses A4 pages, 48 point margins, 12 point text and 48 points of answer space. Pro page controls and named settings are in the selection preview.' }];
 }
}
