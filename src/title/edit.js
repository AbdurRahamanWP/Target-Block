import { __ } from '@wordpress/i18n';
import { useBlockProps, withColors, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } )
	}


return (
		<RichText 
			{ ...blockProps }
			tagName="p"
			onChange={ onChangeContent }
			allowedFormats={ [ 'core/bold', 'core/italic' ] }
			value={ attributes.content }
			placeholder={ __( 'Target Title Write your text...' ) }
		/>
	);
}