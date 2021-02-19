import ImageFileInputCommand from './imagefileinputcommand';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

/**
 * The image text alternative editing plugin.
 *
 * Registers the `'imageFileInput'` command.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ImageFileInputEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'imageFileInputEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		this.editor.commands.add( 'imageFileInput', new ImageFileInputCommand( this.editor ) );
	}
}
