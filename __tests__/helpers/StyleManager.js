import * as StyleManager from '../../lib/helpers/StyleManager';

describe('StyleManager', () => {
    describe('getStyle method', () => {
        it('should be defined', () => {
            expect(StyleManager.getStyle).toBeDefined();
        });
    });

    describe('createStyle method', () => {
        it('should be defined', () => {
            expect(StyleManager.createStyle).toBeDefined();
        });

        it('should set a flattened object', () => {
            const styleObject = {
                app: {
                    header: {
                        backgroundColor: 'yellow'
                    },
                    footer: {
                        tabItem: {
                            flexDirection: 'row'
                        }
                    }
                }
            };

            StyleManager.createStyle(styleObject);
            StyleManager.render();
            console.log('result', StyleManager.getStyle('app__header'));

        });
    })
});
