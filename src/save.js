import { __ }                         from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Inspector                      from './inspector';
import AlertIcon                      from './icons';
import INNER_BLOCKS_TEMPLATE          from './inner_blocks_template';

export default function Save (  {attributes}  ) {

	const {
		      title,
		      hasTitle,
		      headingTag,
		      alertType,
		      currentIcon,
		      hasIcon,
		      invertColors,
	      } = attributes;

	const setJBAlertClassList = () => {
		let classArr = [ 'jb-block', `alert-${alertType}` ];
		if ( invertColors ) {
			classArr.push( 'alert-dark' );
		}

		return classArr.join( ' ' );
	};

	const HeadingTag = headingTag;

	return (
		<div {...useBlockProps()}>
			<div className={setJBAlertClassList()}>
				{hasIcon &&
				<AlertIcon currentIcon={currentIcon}/>
				}
				<div className="jb-block-inner-content">
					{hasTitle &&
					<HeadingTag>{title === '' ? 'Enter an alert title...' : title}</HeadingTag>
					}
					<InnerBlocks.Content/>
				</div>
			</div>
		</div>
	);
}
