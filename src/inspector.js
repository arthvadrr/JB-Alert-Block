import { __ }                from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

import {
	BaseControl,
	Button,
	ButtonGroup,
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	TextControl,
} from '@wordpress/components';

const Inspector = (
	{
		title,
		setTitle,
		hasTitle,
		setHasTitle,
		textAlignment,
		setTextAlignment,
		headingLevel,
		setHeadingLevel,
		setAttributes,
	} ) => {

	      return (
		      <InspectorControls>
			      <PanelBody title={__( 'Settings' )}>
				      <PanelRow>
					      <ToggleControl
						      label="Title"
						      help={hasTitle ? 'Title enabled' : 'Title disabled'}
						      checked={hasTitle}
						      onChange={() => setHasTitle( !hasTitle )}
					      />
				      </PanelRow>

				      {hasTitle &&
				      <>
					      <PanelRow>
						      <TextControl
							      label="Title"
							      value={title}
							      placeholder="Enter an alert title..."
							      onChange={( title ) => setTitle( title )}
						      />
					      </PanelRow>
					      <ButtonGroup>
						      <Button isPrimary={headingLevel === 2} onClick={() => setHeadingLevel(2)}>H2</Button>
						      <Button isPrimary={headingLevel === 3} onClick={() => setHeadingLevel(3)}>H3</Button>
						      <Button isPrimary={headingLevel === 4} onClick={() => setHeadingLevel(4)}>H4</Button>
						      <Button isPrimary={headingLevel === 5} onClick={() => setHeadingLevel(5)}>H5</Button>
						      <Button isPrimary={headingLevel === 6} onClick={() => setHeadingLevel(6)}>H6</Button>
					      </ButtonGroup>
				      </>
				      }
				      <PanelRow>
					      <SelectControl
						      label="Text Alignment"
						      value={textAlignment}
						      options={[
							      { label : 'Left', value : 'left' },
							      { label : 'Center', value : 'center' },
							      { label : 'Right', value : 'right' },
						      ]}
						      onChange={( align ) => setTextAlignment( align )}
					      />
				      </PanelRow>
			      </PanelBody>
		      </InspectorControls>
	      );
      }
;

export default Inspector;
