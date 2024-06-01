import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } )
	}

// 	<Toolbar label={ __('Change heading tag', 'target-block') }>
//     <ToolbarGroup
//         isCollapsed={ true }
//         controls={ [
//             {
//                 tag: 'h1',
//                 label: __('Heading 1', 'target-block'),
//             },
//             {
//                 tag: 'h2',
//                 label: __('Heading 2', 'target-block'),
//             },
//             {
//                 tag: 'h3',
//                 label: __('Heading 3', 'target-block'),
//             },
//             {
//                 tag: 'h4',
//                 label: __('Heading 4', 'target-block'),
//             },
//             {
//                 tag: 'h5',
//                 label: __('Heading 5', 'target-block'),
//             },
//             {
//                 tag: 'h6',
//                 label: __('Heading 6', 'target-block'),
//             }
//         ].map((tag) => {
//             return {
//                 title: tag.label,
//                 isActive: headingTag === tag.tag,
//                 onClick: () => setAttributes({'headingTag': tag.tag}),
//             }
//         }) }
//     />
// </Toolbar>


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