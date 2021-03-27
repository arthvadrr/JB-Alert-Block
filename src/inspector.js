import { __ }                from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

import {
	Button,
	ButtonGroup,
	PanelBody,
	PanelRow,
	ToggleControl,
	TextControl,
}                from '@wordpress/components';
import AlertIcon from './icons';

const Inspector = (
	{
		title,
		hasTitle,
		headingTag,
		alertType,
		currentIcon,
		hasIcon,
		invertColors,
		setAttributes,
	} ) => {

	console.log(`
	${title}
	${hasTitle}
	${headingTag}
	${alertType}
	${currentIcon}
	${hasIcon}
	${invertColors}
	${setAttributes}
	`);

	      const alertTypes = [
		      'default',
		      'info',
		      'warning',
		      'success',
		      'danger',
	      ];

	      const iconTypes = [
		      'bullhorn',
		      'fire',
		      'warning',
		      'checkmark',
		      'bell',
		      'clipboard',
		      'notification',
		      'checkbox',
		      'bubble',
		      'point',
		      'info',
	      ];

	      const setAlertButtonClassList = ( alert ) => {
		      let classArr = [ `alert-${alert}` ];
		      if ( alertType === alert ) {
			      classArr.push( 'btn-active' );
		      }

		      if ( invertColors ) {
			      classArr.push( 'alert-dark' );
		      }

		      return classArr.join( ' ' );
	      };

	      const setAlertIconButtonClassList = ( icon ) => {
		      let classArr = [ 'btn-alert-icon' ];

		      if ( icon === currentIcon ) {
			      classArr.push( 'btn-active' );
		      }

		      return classArr.join( ' ' );
	      };

	      return (
		      <InspectorControls>
			      <PanelBody title={__( 'Title' )}>
				      <PanelRow>
					      <ToggleControl
						      label="Title"
						      help={hasTitle ? 'Title enabled' : 'Title disabled'}
						      checked={hasTitle}
						      onChange={() => setAttributes( { hasTitle : !hasTitle } )}
					      />
				      </PanelRow>

				      {hasTitle &&
				      <>
					      <PanelRow>
						      <TextControl
							      label="Title"
							      value={title}
							      placeholder="Enter an alert title..."
							      onChange={( title ) => setAttributes( { title : title } )}
						      />
					      </PanelRow>
					      <ButtonGroup>
						      <Button isPrimary={headingTag === 'h2'} onClick={() => setAttributes( { headingTag : 'h2' } )}>H2</Button>
						      <Button isPrimary={headingTag === 'h3'} onClick={() => setAttributes( { headingTag : 'h3' } )}>H3</Button>
						      <Button isPrimary={headingTag === 'h4'} onClick={() => setAttributes( { headingTag : 'h4' } )}>H4</Button>
						      <Button isPrimary={headingTag === 'h5'} onClick={() => setAttributes( { headingTag : 'h5' } )}>H5</Button>
						      <Button isPrimary={headingTag === 'h6'} onClick={() => setAttributes( { headingTag : 'h6' } )}>H6</Button>
						      <Button isPrimary={headingTag === 'strong'} onClick={() => setAttributes( { headingTag : 'strong' } )}>Strong</Button>
						      <Button isPrimary={headingTag === 'p'} onClick={() => setAttributes( { headingTag : 'p' } )}>p</Button>
						      <Button isPrimary={headingTag === 'i'} onClick={() => setAttributes( { headingTag : 'i' } )}>i</Button>
					      </ButtonGroup>
				      </>
				      }
			      </PanelBody>
			      <PanelBody title={__( 'Alert Type' )}>
				      <PanelRow>
					      <ToggleControl
						      label="Invert Colors"
						      help={invertColors ? 'Inverted' : 'Normal'}
						      checked={invertColors}
						      onChange={() => setAttributes( { invertColors : !invertColors } )}
					      />
				      </PanelRow>
				      <PanelRow>
					      <ButtonGroup className="alert-types">
						      {alertTypes.map( ( alert, i ) => {
							      return (
								      <Button
									      key={i}
									      icon="warning"
									      className={setAlertButtonClassList( alert )}
									      onClick={() => setAttributes( { alertType : alert } )}
								      >
									      {alert.charAt( 0 ).toUpperCase() + alert.slice( 1 )}
								      </Button>
							      );
						      } )
						      }
					      </ButtonGroup>
				      </PanelRow>
			      </PanelBody>
			      <PanelBody title={__( 'Icon' )}>
				      <PanelRow>
					      <ToggleControl
						      label="Use Icon"
						      help={hasIcon ? 'Icon enabled' : 'Icon disabled'}
						      checked={hasIcon}
						      onChange={() => setAttributes( { hasIcon : !hasIcon } )}
					      />
				      </PanelRow>

				      {hasIcon &&
				      <PanelRow>
					      <ButtonGroup className="alert-icon-select">
						      {iconTypes.map( ( icon ) => {
							      return (
								      <Button
									      className={setAlertIconButtonClassList( icon )}
									      onClick={() => setAttributes( { currentIcon : icon } )}
								      >
									      <AlertIcon currentIcon={icon}></AlertIcon>
								      </Button>
							      );
						      } )}
					      </ButtonGroup>
				      </PanelRow>
				      }
			      </PanelBody>
		      </InspectorControls>
	      );
      }
;

export default Inspector;
