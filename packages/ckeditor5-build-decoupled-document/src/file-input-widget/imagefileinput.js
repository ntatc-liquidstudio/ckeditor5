import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ImageFileInputEditing from './imagefileinputediting';
import ImageFileInputUI from './imagefileinputui';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

/**
 * The file input widget plugin.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ImageFileInput extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ Widget, ImageFileInputEditing, ImageFileInputUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ImageFileInput';
	}
}
