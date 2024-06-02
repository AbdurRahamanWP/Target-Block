import {InspectorControls,useBlockProps, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import {TextareaControl, TextControl} from "@wordpress/components";
import {__} from "@wordpress/i18n";


export default function Edit( { attributes, setAttributes } ) {

	const blockProps = useBlockProps({className: 'item'});
return (
	
		<Fragment>
			<div {...blockProps}>

				<TextControl
					label={__('Info Title', 'target-block')}
					value={attributes.infoTitle}
					onChange={(val) =>
						setAttributes({ infoTitle: val })
					}
				/>

				<TextareaControl
					label={__('Info Content', 'target-block')}
					value={attributes.infoContent}
					onChange={(val) =>
						setAttributes({ infoContent: val })
					}
				/>

				<TextControl
					label={__('Button Level', 'target-block')}
					value={attributes.ButtonLevel}
					onChange={(val) =>
						setAttributes({ ButtonLevel: val })
					}
				/>

				<TextControl
					label={__('Button URL', 'target-block')}
					value={attributes.ButtonURL}
					onChange={(val) =>
						setAttributes({ ButtonURL: val })
					}
				/>

				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ authorImage: media.url })}
						type="image"
						render={({ open }) => (
							<div>
								<button onClick={open}>Feature Image</button>
								{attributes.authorImage && <img src={attributes.authorImage} alt="Author" />}
							</div>
						)}
					/>
				</MediaUploadCheck>

			</div>
		</Fragment>
			
		
	);
}