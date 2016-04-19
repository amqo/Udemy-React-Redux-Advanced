import { expect } from '../test_helper';

import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {

  describe('saveComment', () => {

    let action;

    beforeEach(() => {
      action = saveComment();
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct initial payload', () => {
      expect(action.payload).to.be.empty;
    });

    it('has the correct payload', () => {
      action = saveComment('New Comment');
      expect(action.payload).to.equal('New Comment');
    });
  });
});
