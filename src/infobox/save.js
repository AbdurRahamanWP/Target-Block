import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save({className: 'item'});
    const { infoTitle, infoContent, ButtonLevel, ButtonURL, authorImage } = attributes;
	
	return (
		<div {...blockProps}>

		<div className="InfoBox_block">
			<div className="d-flex align-items-center">
				<div className="ms-3 content_area">
					<div className="info_title fw-500">{infoTitle}</div>
					<div className='InfoImages'>
						{authorImage && <img src={authorImage} alt="Author" className="author-img rounded-circle"/>}
					</div>
					<div className="info_content fw-500 text-dark">{infoContent}</div>
					<a href='#'>{ButtonLevel}</a>
				</div>

				
				
			</div>
		</div>
	</div>
	);
}