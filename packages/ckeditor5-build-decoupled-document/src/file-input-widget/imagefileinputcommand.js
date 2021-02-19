import Command from '@ckeditor/ckeditor5-core/src/command';
import { isImage } from '@ckeditor/ckeditor5-image/src/image/utils';

/**
 * The file input widget command.
 *
 * @extends module:core/command~Command
 */
export default class ImageFileInputCommand extends Command {

	/**
	 * @inheritDoc
	 */
	refresh() {
		const element = this.editor.model.document.selection.getSelectedElement();

		this.isEnabled = isImage( element );

		if ( isImage( element )) {
			this.value = element;
		} else {
			this.value = false;
		}
	}

	/**
	 * Executes the command.
	 *
	 * @fires execute
	 * @param {Object} options
	 * @param {String} options.newValue The new value of the `alt` attribute to set.
	 */
	execute( options ) {
		const model = this.editor.model;
		const imageElement = model.document.selection.getSelectedElement();

		const imagesToUpload = options.imagesToUpload;
		if (imagesToUpload.length) {
			model.change((writer) => {
				this.editor.execute("imageUpload", { file: imagesToUpload });
				writer.remove(imageElement);
			});
		}
	}
}
