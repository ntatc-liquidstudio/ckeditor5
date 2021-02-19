import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import FileDialogButtonView from "@ckeditor/ckeditor5-upload/src/ui/filedialogbuttonview";
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon';
import { createImageTypeRegExp } from '@ckeditor/ckeditor5-image/src/imageupload/utils';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

/**
 * The file input widget UI plugin.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ImageFileInputUI extends Plugin {

	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ ContextualBalloon ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return "ImageFileInputUI";
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add("imageFileInput", (locale) => {
			const view = new FileDialogButtonView(locale);
			const imageTypes = editor.config.get("image.upload.types");
			const imageTypesRegExp = createImageTypeRegExp( imageTypes );

			view.set({
				acceptedType: imageTypes
					.map((type) => `image/${type}`)
					.join(","),
				allowMultipleFiles: true,
			});

			view.buttonView.set({
				label: t("Change image"),
				icon: imageIcon,
				tooltip: true,
			});

			view.on("done", (evt, files) => {
				const imagesToUpload = Array.from(files).filter((file) =>
					imageTypesRegExp.test(file.type)
				);

				editor.execute( 'imageFileInput', {
					imagesToUpload: imagesToUpload
				} );
			});

			return view;
		});
	}

	/**
	 * @inheritDoc
	 */
	destroy() {
		super.destroy();
	}
}
