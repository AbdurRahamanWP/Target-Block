import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {


	const blockProps = useBlockProps.save({className: 'item'});
    const { authorName, designation, reviewContents, authorImage } = attributes;


	
	return (
		<div {...blockProps}>

		<div className="feedback-block-four">
			<div className="d-flex align-items-center">
				{authorImage && <img src={authorImage} alt="Author" className="author-img rounded-circle"/>}
				<div className="ms-3">
					<div className="name fw-500 text-dark">{authorName}</div>
					<div className="name fw-500 text-dark">{designation}</div>
					<span className="opacity-50">{reviewContents}</span>
				</div>
			</div>
		</div>
	</div>
	);
}