import {useBlockProps, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import {TextareaControl, TextControl} from "@wordpress/components";
import {__} from "@wordpress/i18n";


export default function Edit( { attributes, setAttributes } ) {
	
	const blockProps = useBlockProps({className: 'item'});
return (
		<Fragment>

			<div {...blockProps}>

				<TextControl
					label={__('Team Member Name', 'target-block')}
					value={attributes.authorName}
					onChange={(val) =>
						setAttributes({ authorName: val })
					}
				/>

				<TextControl
					label={__('Designation', 'target-block')}
					value={attributes.designation}
					onChange={(val) =>
						setAttributes({ designation: val })
					}
				/>

				<TextareaControl
					label={__('Description Contents', 'target-block')}
					value={attributes.reviewContents}
					onChange={(val) =>
						setAttributes({ reviewContents: val })
					}
				/>

				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ authorImage: media.url })}
						type="image"
						render={({ open }) => (
							<div>
								<button onClick={open}>Team Image</button>
								{attributes.authorImage && <img src={attributes.authorImage} alt="Author" />}
							</div>
						)}
					/>
				</MediaUploadCheck>


			</div>
		</Fragment>
	);
}