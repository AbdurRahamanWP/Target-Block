import {InspectorControls,useBlockProps, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import {TextareaControl, ColorPaletteControl, TextControl, PanelBody} from "@wordpress/components";
import {__} from "@wordpress/i18n";


export default function Edit( { attributes, setAttributes } ) {
	const { NameColor,DesignationColor,ContentColor} = attributes;

	const colorSettings = [
		{
			label: __('Name Color', 'target-block'),
			color: NameColor,
			onChange: (value) => setAttributes({ NameColor: value }),
		},
		{
			label: __('Designation Color', 'target-block'),
			color: DesignationColor,
			onChange: (value) => setAttributes({ DesignationColor: value }),
		},
		{
			label: __('Content Color', 'target-block'),
			color: ContentColor,
			onChange: (value) => setAttributes({ ContentColor: value }),
		},
	];

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

				<InspectorControls>
					{/* Color settings */}
					<PanelBody
						title={__('Color settings', 'target-block')}
						initialOpen={false}
					>
						{colorSettings.map((palette, i) => (
							<ColorPaletteControl
								key={i}
								label={palette.label}
								value={palette.color}
								onChange={palette.onChange}
							/>
						))}
					</PanelBody>

				</InspectorControls>
			</Fragment>
			
		
	);
}