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
            expect(StyleManager.getStyle('app__header')).toEqual('yellow');
            expect(StyleManager.getStyle('app__footer__tabItem')).toBe('row');
            
        });
    })
});
